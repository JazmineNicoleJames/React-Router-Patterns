import React from "react";
import { Link } from "react-router-dom";
import "./Colors.css";

const Colors = ({color}) => {
    return (
        <div className="Color">
            <h1 className="welcomeMsg">Welcome to the color factory.</h1>
            <div className="addColor">
            <Link to="/colors/new" style={{color:"white"}}>Add a color</Link>
            </div>
            Please select a color: 
        {color.map(c => (
            <div className="colors" key={c.name}>
                <Link to={`/colors/${c.name}`}> {c.name}</Link>
            </div>
        ))}
        </div>
    )
}

export default Colors;