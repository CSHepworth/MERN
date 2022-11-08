import React, { useState, useEffect } from 'react';

import {Routes, Route, Link, useParams, useNavigate, redirect, Switch} from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Welcome</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
