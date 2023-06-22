import React, { useState } from "react";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState({
    title: props.title,
    content: props.content,
  });

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdatedNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleUpdateClick() {
    props.onEdit(updatedNote, props.id);
    setIsEditing(false);
  }

  function handleClick(event) {
    const id = props.id;
    props.onDelete(id);
  }

  return (
    <div className="note">
      {isEditing ? (
        <input
          onChange={handleChange}
          name="title"
          value={updatedNote.title}
        />
      ) : (
        <h1>{props.title}</h1>
      )}

      {isEditing ? (
        <textarea
          onChange={handleChange}
          name="content"
          value={updatedNote.content}
        />
      ) : (
        <p>{props.content}</p>
      )}

      {isEditing ? (
        <button onClick={handleUpdateClick}>Update</button>
      ) : (
        <button onClick={handleEditClick}>
          <Edit />
        </button>
      )}

      <button onClick={handleClick}>
        <Delete />
      </button>
    </div>
  );
}

export default Note;
