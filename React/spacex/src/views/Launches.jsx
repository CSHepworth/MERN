import axios from "axios"
import React, { useState, useEffect } from 'react';
import { LoadingSpinner } from "../components/LoadingSpinner";
import {Link} from 'react-router-dom';

export const Launches = (props) => {
    const [launches, setLaunches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            axios
            .get('https://api.spacexdata.com/v4/launches')
            .then((res) => {
                console.log(res.data);
                setLaunches(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
        }, 2000)
    }, [])
    return (
        <div className="flex-col align-items-center text-center">
            {
                isLoading && <LoadingSpinner/>
            }
            {
                launches.map((launch, i) => {
                    const {name, date_local, id} = launch;
                    return (
                        <div key={i} className="w-25pct mb-md shadow rounded">
                            <Link to={`/oneLaunch/${id}`}>
                                <h2>{name}</h2>
                            </Link>
                            <p>Date: {date_local}</p>
                        </div>
                    )
                })
            }
        </div>

    )
}