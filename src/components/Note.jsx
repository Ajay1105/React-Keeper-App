import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

function Note(props) {
  var id = props.id
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton onClick={(event)=>{props.delete(id);event.preventDefault();}}><DeleteForeverIcon /></IconButton>
    </div>
  );
}

export default Note;
