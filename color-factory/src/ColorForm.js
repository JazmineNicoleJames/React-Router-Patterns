import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./ColorForm.css";
const ColorForm = ({addColor}) => {
    const [color, setColor] = useState("");
    const [colorVal, setColorVal] = useState("#00000")
    const navigate = useNavigate();

    const handleChange = (e) => {
        setColor(e.target.value);
    }

    const handleColorChange = (e) => {
        setColorVal(e.target.value)
    }

    const handleSubmit = () => {
        addColor(color, colorVal);    
        navigate("/colors");

    }

    return (
        <form id="color">
            <label htmlFor="color"> Color name </label>
            <input 
                type="text" 
                className="color"
                placeholder="color" 
                name="color" 
                value={color}
                onChange={handleChange} />
                
            <label htmlFor="color"> Color picker </label>
            <input type="color"
                className="colorVal"
                value={colorVal}
                onChange={handleColorChange}
            />
            <button onClick={handleSubmit}> Submit color! </button>
        </form>
    )
};

export default ColorForm;