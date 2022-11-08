import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { SearchBar } from "./SearchBar";

export const PlanetSearch = (props) => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            axios
                .get(`https://swapi.dev/api/planets/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setPlanet(res.data);
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
                    <h2>{planet.name}</h2>
                    <h4>Rotation Period: {planet.rotation_period}</h4>
                    <h4>Orbital Period: {planet.orbital_period}</h4>
                    <h4>Diameter: {planet.diameter}</h4>
                    <h4>Climate: {planet.climate}</h4>
                </div>
                }
            </div>
        </>

    )
}