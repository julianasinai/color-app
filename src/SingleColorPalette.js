import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { ThemeProvider } from '@material-ui/core';

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
    return (
      <div className='Palette'>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className='Palette-colors'>
          {this._shades.map(color => (
            <ColorBox 
              key={color.id} 
              name={color.name} 
              background={color[this.state.format]} 
              showLink={false}         
              />
          ))}
        </div>
        <PaletteFooter 
          paletteName={this.props.palette.paletteName} 
          emoji={this.props.palette.emoji} 
        />
      </div>
    );
  }
}

export default SingleColorPalette; 