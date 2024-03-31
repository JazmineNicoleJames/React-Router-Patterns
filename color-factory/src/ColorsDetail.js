import React from "react";
import { Link } from "react-router-dom";
import "./ColorsDetail.css";
const ColorsDetail = ({color}) => {
    return (
        <div className="ColorDetail" style={{backgroundColor: color.value}}>
            <h1 className="colorH1"> This is {color.name} , isn't it beautiful?</h1>
            <Link to="/colors" className="return"> Return </Link>
        </div>
    )
}

export default ColorsDetail;