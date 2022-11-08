import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {Routes, Route, Link, useNavigate} from "react-router-dom";


export const Survey = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const sendSurvey = (e) => {
    e.preventDefault();
    navigate("/results");
  }

  return (
    <form onSubmit={sendSurvey}>
        <label>Your Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
        <label>Your Comment:</label>
        <textarea onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
        <input type="submit" value="Submit Suvey"/>
    </form>
  );
}