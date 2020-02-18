import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(props => {
  return (
    <div className={props.classes.root} style={{backgroundColor: props.color}}>
      <div className={props.classes.boxContent}>
        <span>{props.color}</span>
        <DeleteIcon className={props.classes.deleteIcon} onClick={props.handleClick}/>
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggableColorBox);