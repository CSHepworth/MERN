import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';



export const ListForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [users, setUsers] = useState([]);

    const userItem = {
        id: uuidv4(),
        firstname: firstName,
        lastname: lastName,
        age: age
    }

    const handleNewUser = (e) => {
        e.preventDefault();
        setUsers([...users, userItem]);
        props.sendUsers(users);
    }

    return (
        <div>
            <form onSubmit={(e) => {
                handleNewUser(e);
            }}>
                <div>
                    <label>First Name: </label>
                    <input onChange={(e) => {
                        setFirstName(e.target.value);
                    }} type="text"/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input onChange={(e) => {
                        setLastName(e.target.value);
                    }} type="text"/>
                </div>
                <div>
                    <label>Age: </label>
                    <input onChange={(e) => {
                        setAge(e.target.value);
                    }} type="number"/>
                </div>
                <input type="submit" value="Add User" />
            </form>


        </div>
    );
} 