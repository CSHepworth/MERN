import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Counter} from './components/Counter';

function App() {
 return (
  <div>
    <Counter title="Bugs in the code"/>
    <Counter title="Test" start={5} step={2}/>
  </div>
 );
}

export default App;

