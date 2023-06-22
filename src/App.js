import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";

function App() {
  const [list, setList] = useState([]);

  function onAdd(note) {
    setList((prevValue) => [...prevValue, note]);
  }

  function onDelete(id) {
    setList((prevValue) => prevValue.filter((item, index) => index !== id));
  }

  function onEdit(updatedNote, index) {
    setList((prevValue) =>
      prevValue.map((note, i) => (i === index ? updatedNote : note))
    );
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
            onEdit={onEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
