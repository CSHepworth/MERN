import React, {useState} from 'react';

export const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 1) {
            setFirstnameError("First name is required.");
        }
        else if (e.target.value.length < 2) {
            setFirstnameError("First name must be at least 2 characters.");
        }
        else {
            setFirstnameError("");
        }
    }

    const handleLastname = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 1) {
            setLastnameError("Last name is required.")
        }
        else if (e.target.value.length < 2) {
            setLastnameError("Last name must be at least 2 characters.")
        }
        else {
            setLastnameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required.")
        }
        else {
            setEmailError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required.")
        }
        else if (e.target.value !== handleConfirm) {
            setPasswordError("Passwords must match");
        }
        else if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters.")
        }
        else {
            setPasswordError("");
        }
    }



    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confirm};
        console.log(newUser)
    };


    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={handleFirstname}/>
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{firstnameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={handleLastname}/>
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{lastnameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={handleEmail}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{emailError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={handleConfirm}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={handlePassword}/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{passwordError}</p> :
                    ''
                }
            </div>
            <input type="submit" value="Submit"/>
        </form>
    );
}