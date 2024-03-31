import React from "react";
import { Link } from "react-router-dom";

const DogList = ({dogs}) => {

    return (
        <div className="DogList">
            <h1 className="DogListGreet"> Hello!</h1>
            <div className="listOfDogs">
                </div>
            {dogs.map(d => (
                <div className="dogs" key={d.name}>
                <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>    
                </div>            
            ))}
        </div>
    )
};

export default DogList;