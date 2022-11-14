import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name);
            });
    }, []);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            name
        })
            .then((res => console.log(res), navigate('/')))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update Author</h1>
            <form onSubmit={updateAuthor} id="updateAuthorForm">
            <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
            </form>
            <div>
                <button onClick={(e) => {navigate('/authors')}}>
                    <span>Cancel</span>
                </button>
                <button type="submit" form="updateAuthorForm">
                    <span>Submit</span>
                </button>
            </div>
        </div>
    )
}

