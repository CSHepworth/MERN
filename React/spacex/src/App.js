import React, { useState, useEffect } from 'react';
import {Route, Routes, Link, Navigate} from 'react-router-dom';
import './App.css';
import { Launches } from './views/Launches';
import { NotFound } from './views/NotFound';
import { OneLaunch } from './views/OneLaunch';


function App() {
  return (
    <>
      <div style={{width: '80%', margin: '0 auto'}}>
        <header>
          <nav>
            <Link to="/launches">
              Launches
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Navigate to="/launches" replace/>}/>
          <Route path='/launches' element={<Launches/>}/>
          <Route path='/oneLaunch/:id' element={<OneLaunch/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
