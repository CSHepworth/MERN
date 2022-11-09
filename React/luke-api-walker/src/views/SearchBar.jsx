import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const SearchBar = (props) => {
    const [category, setCategory] = useState("people");
    const [id, setId] = useState("");
    const navigate = useNavigate();
   
    const searchItem = {
        category: category,
        id: id
    }

    const handleSearchItem = (e) => {
        e.preventDefault();
        const {category} = searchItem;
        if (category === "people") {
            console.log(category);
            navigate(`/people/${id}`);
        }
        else if (category === "planets") {
            console.log(category);
            navigate(`/planets/${id}`);
        }
    }
    
    return (
        <form onSubmit={(e) => {
            handleSearchItem(e);
        }}>
            <div>
                <label>Search For: </label>
                <select onChange={(e) => {
                    setCategory(e.target.value);
                }}>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </select>
            </div>
            <div>
                <label>ID: </label>
                <input type="text" onChange={(e) => {
                    setId(e.target.value);
                }}/>
            </div>
            <div>
                <input type="submit" value="Search" />
            </div>
        </form>
    )
}