import React, { useState } from 'react';
import './App.css';

function App() {
  const [newToDo, setNewToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const toDoItem = {
    text: newToDo,
    complete: false
  }

  const handleNewToDoSubmit = (e) => {
    e.preventDefault();
    setToDos([...toDos, toDoItem]);
  };

  const handleToDoDelete = (delIdx) => {
    const filteredToDos = toDos.filter((toDo, i) => {
      return i != delIdx;
    });

    setToDos(filteredToDos);
  };

  const handleToDoComplete = (idx) => {
    const updatedToDos = toDos.map((toDo, i) => {
      if (idx == i) {
        toDo.complete = !toDo.complete;
      }
      return toDo;
    });

    setToDos(updatedToDos);
  }

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(event) => {
        handleNewToDoSubmit(event);
      }}>
        <input onChange={(event) => {
          setNewToDo(event.target.value);
        }}
         type="text"
         value={newToDo}
        />
        <div>
          <input type="submit" value="add"/>
        </div>
      </form>
      
      {
        toDos.map((toDo, i) => {
          return (
            <div key={i}>
              <span>{toDo.text}</span>
              <input onChange={(event) => {
                handleToDoComplete(i);
              }} checked={toDo.complete} type="checkbox"/>
              <button onClick={(event) => {
                handleToDoDelete(i);
              }}>Delete</button>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
