import React from "react";
import { useParams } from "react-router-dom";
import ColorsDetail from "./ColorsDetail"

const ColorFilter = ({colors}) => {
    const { color } = useParams();
    const selectedColor = colors.find((c) => c.name === color)
    if(selectedColor) {
        return <ColorsDetail color={selectedColor} />
    }
    return null;
}

export default ColorFilter;