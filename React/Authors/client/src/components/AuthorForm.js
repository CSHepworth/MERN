import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export const AuthorForm = (props) => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const newAuthorHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {
            name
        })
            .then(res => console.log(res), navigate('/'))
            .catch(err => console.log(err))
    }

    const cancelNewAuthor = (e) => {
        return (
            navigate('/authors')
        )
    }

    return (
        <>
            <Link to="/authors">
                <span>Home</span>
            </Link>
            <h3>Add a new author:</h3>
            <form onSubmit={newAuthorHandler} id="authorForm">
                <div>
                    <label>Name: </label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
                </div>
            </form>
            <div>
                <button onClick={(e) => {cancelNewAuthor()}}>
                    <span>Cancel</span>
                </button>
                <button type="submit" form="authorForm">
                    <span>Submit</span>
                </button>
            </div>
        </>
    )
}