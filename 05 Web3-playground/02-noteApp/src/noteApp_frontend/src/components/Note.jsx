import React from "react";
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';



function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab className="note-button" onClick={handleClick}>
        <DeleteIcon className="add-icon" />
      </Fab>
      
    </div>
  );
}

export default Note;
