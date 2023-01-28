import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Note from "./Components/Note";

import CreateArea from "./Components/CreateArea";

function App() {
  const [list, setList] = useState([]);

  function onAdd(note) {
    setList((prevValue) => {
      return [...prevValue, note];
    });
  }
  function onDelete(id) {
    console.log(id);
    setList((prevValue) => {
     return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={onAdd} />
      <div className="list-container">
      {list.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={onDelete}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
