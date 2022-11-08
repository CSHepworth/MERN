import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { ListForm } from './components/ListForm';
import { ListDisplay } from './components/ListDisplay';


function App() {
  const [userList, setUserList] = useState([]);

  const sendUserList = (users) => {
    setUserList(users);
  }

  return (
    <>
      <h1>Foundry</h1>
      <div>
        <ListForm sendUsers={sendUserList}/>
        <ListDisplay users={userList}/>
      </div>
    </>
  );
}

export default App;
