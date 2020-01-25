import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex'};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ format: evt.target.value});
    this.props.handleChange(evt.target.value);
  }
  render() {
    return(
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>reactcolorpicker</a>
        </div>
        <div  className='slider-container'>
          <span>Level: {this.props.level}</span>
          <div className='slider'>
            <Slider 
              defaultValue={this.props.level}
              min={100}
              max={900}
              step={100}
              onAfterChange={this.props.changeLevel}
              trackStyle={{ backgroundColor: 'transparent'}}
              handleStyle={{ 
                backgroundColor: 'green', 
                outline: 'none', 
                border: '2px solid green', 
                boxShadow: 'none', 
                width: '13px', 
                height: '13px', 
                marginTop: '-3px'
              }}
            railStyle={{ height: '8px'} }
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value='hex'>Hex - #fffff</MenuItem>    
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>    
            <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>    
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;