import React, { useState, useEffect } from "react";
import axios from "axios";
import Description from './Description';


const PicOfDay = () => {
    const [data, setData] = useState({});
    useEffect(() => {
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
        setData(res.data);
        })
        .catch(error => {
        console.log("The data was not returned", error);
        });
    }, []);

    return (
        <div className="card">
            {console.log(data)}
            <img alt={data.title} src={data.url} />
            <Description title={data.title} explanation={data.explanation} />
        </div>
    )
}

export default PicOfDay

