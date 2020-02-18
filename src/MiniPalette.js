import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';

function MiniPalette(props) {
  const { classes, paletteName, colors } = props;
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.delete}>
        <DeleteIcon 
          className={classes.deleteIcon} 
          style={{transition: 'all 0.3s ease-in-out'}}
        />
      </div>
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

export default withStyles(styles)(MiniPalette);