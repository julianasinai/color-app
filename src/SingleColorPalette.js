import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  colors: {
    height: '90%'
  },
  goBack: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.75px',
    opacity: '1',
    backgroundColor: 'black',
    position: 'relative',
    '& a': {
      color: 'white',
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px',
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      textTransform: 'uppercase',
      border: 'none',
      textDecoration: 'none'
    }
  }
}

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex'
    }
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.changeFormat = this.changeFormat.bind(this);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for(let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  } 
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className={classes.colors}>
          {this._shades.map(color => (
            <ColorBox 
              key={color.name} 
              name={color.name} 
              background={color[this.state.format]} 
              showingFullPalette={false}         
              />
          ))}
          <div className={classes.goBack} >
            <Link to={`/palette/${this.props.palette.id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter 
          paletteName={this.props.palette.paletteName} 
          emoji={this.props.palette.emoji} 
        />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette); 