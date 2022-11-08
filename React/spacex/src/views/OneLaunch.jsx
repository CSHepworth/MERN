import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const OneLaunch = (props) => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [launch, setLaunch] = useState({});

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            axios
            .get(`https://api.spacexdata.com/v4/launches/${id}`)
            .then((res) => {
                console.log(res.data);
                setLaunch(res.data);
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
        <div className="fles-col align-items-center text-center">
            {
                isLoading && <LoadingSpinner/>
            }
            {
            <div>
                <h2>{launch.name}</h2>
                <h4>Date: </h4>
                <p>{launch.date_local}</p>
                <h4>Details:</h4>
                <p>{launch.details}</p>
            </div>
            }
        </div>
    );
}