import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isEditing ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        ) : null}

        <textarea
          onClick={() => setIsEditing(true)}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isEditing ? "3" : "1"}
          value={note.content}
        />

        {isEditing ? (
          <button onClick={handleClick}>
            <AddIcon />
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
