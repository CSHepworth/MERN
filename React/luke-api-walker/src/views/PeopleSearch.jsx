import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { SearchBar } from "./SearchBar";



export const PeopleSearch = (props) => {

    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [person, setPerson] = useState({});

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            axios
                .get(`https://swapi.dev/api/people/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setPerson(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }, 2000)
    }, [id])

    return (
        <>
            <SearchBar/>
            <div>
                {
                    isLoading && <LoadingSpinner/>
                }
                {
                <div>
                    <h2>{person.name}</h2>
                    <h4>Height: {person.height}</h4>
                    <h4>Mass: {person.mass}</h4>
                    <h4>Hair Color: {person.hair_color}</h4>
                    <h4>Skin Color: {person.skin_color}</h4>
                </div>
                }
            </div>
        </>
    )
}