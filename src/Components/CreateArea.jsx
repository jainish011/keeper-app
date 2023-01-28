import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [note, setNote] = useState({
    //This is note state which have contain title and content
    title: "",
    content: "",
  });
  const [size, setSize] = useState(false);
  function handleSize() {
    setSize(true);
  }

  function handleChange(event) {
    //This function will occur when we are writing in our textbox.
    console.log(event.target);
    const { name, value } = event.target; //Here we have use decomposition of object.And fetch name and value from our input.So you can see there will be properties like name and value in input field.
    console.log(note);
    setNote((prevValue) => {
      //This will set new value to our note
      return {
        ...prevValue, //...prevValue means that we are adding prevValue in our object
        [name]: value, // In JS if we have to write any variable as key then we have to wrap it in array syntax.
        //If name="title" then it will update the new value in title input field.
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setSize(false)
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
      {size? <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />:null}
       
        <textarea
          onClick={handleSize}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={size?'3':'1'}
          value={note.content}
        />

        {size?<button onClick={handleClick}><AddIcon/></button>:null}
      </form>
    </div>
  );
}

export default CreateArea;
