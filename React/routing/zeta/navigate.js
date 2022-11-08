import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import { Survey } from '../zeta/Survey';

const Home = (props) => {
  return (
    <div>
      <Survey/>
    </div>
  );
}

const Results = (props) => {
  return (
    <div>
      <h1>Results</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/results" element={<Results/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
