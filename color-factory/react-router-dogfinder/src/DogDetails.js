import React from "react";
import { Link } from "react-router-dom";

const DogDetails = ({ dog }) => {

    return (
        <div>
            <h1>{dog.name}</h1>
            <h2>{dog.age} years old</h2>
            <img src={dog.src} alt="cutedog" />
            <ul>
                {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs"> Return to all dogs</Link>
        </div>
    )
};

export default DogDetails;