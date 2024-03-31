
import React, {useState} from "react";
import Colors from "./Colors";
import ColorFilter from "./ColorFilter";
import ColorForm from "./ColorForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const INITIAL_STATE = [
    {
    name: "blue",
    value: "#0000FF"
    },
    {
    name: "red",
    value: "#FF0000"
    }
  ]

  const [colors, setColors] = useState(INITIAL_STATE)
  const addColor = (color, colorVal) => {
    setColors([{name: color, value: colorVal}, ...colors])

  }
  console.log('this should be color and val', colors)

  return (
      <BrowserRouter>
        <Routes>
        <Route path="/colors/new" element={<ColorForm addColor={addColor} />}>
          </Route> 
          <Route exact path="/colors" element={<Colors color={colors}/>}>
          </Route> 
          <Route path="/colors/:color" element={<ColorFilter colors={colors}/>}>
          </Route> 
        </Routes>
      </BrowserRouter>
  );
}

export default App;
