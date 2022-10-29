import React from 'react';
import logo from './logo.svg';
import './App.css';

import {PersonCard} from './components/PersonCard';

function App() {
  return (
    <>
      <div>
          <PersonCard FirstName = "John" LastName = "Dough" AgeStart = {50} HairColor = "Brown" />
      </div>
      <div>
        <PersonCard FirstName = "Abe" LastName = "Froman" AgeStart = {17} HairColor = "Brown" />
      </div>
      <div>
        <PersonCard FirstName = "Toby" LastName = "Van Adobe" AgeStart = {62} HairColor = "Brown" />
      </div>
      <div>
        <PersonCard FirstName = "Jack" LastName = "Donaghy" AgeStart = {55} HairColor = "Black/Gray" />
      </div>
    </>
  );
}

export default App;
