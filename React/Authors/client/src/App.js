import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Main } from './views/Main';
import { New } from './views/New';
import { Update } from './views/Update';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path='/' element={<Navigate to='/authors' replace/>}/>
        <Route path='/authors' element={<Main/>}/>
        <Route path='/authors/new' element={<New/>}/>
        <Route path='/authors/:id/edit' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
