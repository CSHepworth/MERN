import React, {useState} from 'react';

export const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, confirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirm};
    };

    return (
        <>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastname(e.target.value)}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => confirmPassword(e.target.value)}/>
                </div>
            </form>
            <div>
                <p>First Name: {firstname}</p>
            </div>
            <div>
                <p>Last Name: {lastname}</p>
            </div>
            <div>
                <p>Email: {email}</p>
            </div>
            <div>
                <p>Password: {password}</p>
            </div>
            <div>
                <p>Confirm Password: {confirm}</p>
            </div>
        </>
    )
}