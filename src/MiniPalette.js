import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.deletePalette = this.deletePalette.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  deletePalette(evt) {
    evt.stopPropagation();
    this.props.openDialog(this.props.id);
  }
  handleClick() {
    this.props.goToPalette(this.props.id);
  }
  render() {
    const { classes, paletteName, colors } = this.props;
    return (
      <div className={classes.root} onClick={this.handleClick}>
        <DeleteIcon 
          className={classes.deleteIcon} 
          style={{transition: 'all 0.3s ease-in-out'}}
          onClick={this.deletePalette}
        />
        <div className={classes.colors}>
          {colors.map(color => (
            <div 
            className={classes.miniColor} 
            style={{backgroundColor: color.color}} 
            key={color.name}
            />
          ))}
        </div>
        <h5 className={classes.title}>{paletteName}</h5>
      </div>
    ); 
  }
}

export default withStyles(styles)(MiniPalette);