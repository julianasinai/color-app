import React, { Component } from 'react';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteStyles';
import ColorBox from './ColorBox';

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