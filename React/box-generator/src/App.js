import React from 'react';
import './App.css';
import { BoxDisplayer } from './components/BoxDisplayer';
import { BoxGenerator } from './components/BoxGenerator';

function App() {
  return (
    <>
      <BoxGenerator/>
      <BoxDisplayer/>
    </>
  );
}

export default App;
