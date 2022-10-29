import React from 'react';
import logo from './logo.svg';
import './App.css';

import {PersonCard} from './components/PersonCard';

function App() {
  return (
    <>
      <div>
          <PersonCard p1FirstName = "John" p1LastName = "Dough" p1Age = {50} p1HairColor = "Brown" />
      </div>
      <div>
        <PersonCard p1FirstName = "Abe" p1LastName = "Froman" p1Age = {17} p1HairColor = "Brown" />
      </div>
      <div>
        <PersonCard p1FirstName = "Toby" p1LastName = "Van Adobe" p1Age = {62} p1HairColor = "Brown" />
      </div>
      <div>
        <PersonCard p1FirstName = "Jack" p1LastName = "Donaghy" p1Age = {55} p1HairColor = "Black/Gray" />
      </div>
    </>
  );
}

export default App;
