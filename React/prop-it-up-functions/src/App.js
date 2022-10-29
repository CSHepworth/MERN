import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <>
      <div>
          <PersonCard FirstName = "John" LastName = "Dough" Age = {50} HairColor = "Brown" />
      </div>
      <div>
        <PersonCard FirstName = "Abe" LastName = "Froman" Age = {17} HairColor = "Brown" />
      </div>
      <div>
        <PersonCard FirstName = "Toby" LastName = "Van Adobe" Age = {62} HairColor = "Brown" />
      </div>
      <div>
        <PersonCard FirstName = "Jack" LastName = "Donaghy" Age = {55} HairColor = "Black/Gray" />
      </div>
    </>
  );
}

export default App;
