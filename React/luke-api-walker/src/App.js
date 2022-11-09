import React, { useState, useEffect } from 'react';
import {Routes, Route, Link, useParams, Navigate} from "react-router-dom";
import './App.css';
import { PeopleSearch } from './views/PeopleSearch';
import { PlanetSearch} from './views/PlanetSearch';
import { SearchBar } from './views/SearchBar';
import { Home } from './views/Home';
import { NotFound } from './views/NotFound';


function App() {

    return (
        <>
            <div>
                <header>
                    <nav>
                        <Link to="/home">
                            Home
                        </Link>
                    </nav>
                </header>
                <Routes>
                    <Route path='/' element={<Navigate to="/home" replace/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/people/:id' element={<PeopleSearch/>}/>
                    <Route path='/planets/:id' element={<PlanetSearch/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
