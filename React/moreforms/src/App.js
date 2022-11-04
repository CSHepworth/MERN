import React, { useState } from 'react';
import './App.css'
import Groceries from './components/MapInReact';
import MessageDisplay from './components/MessageDisplay';
import MessageForm from './components/MessageForm';

import { UserForm } from './components/UserForm';

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");

  const youveGotMail = (newMessage) => {
    setCurrentMsg(newMessage);
  }

  return (
    <div>
      <UserForm/>
    </div>
    
  );
}

export default App;
