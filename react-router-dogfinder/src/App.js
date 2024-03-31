import './App.css';
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DogList from "./DogList";
import FilterDogs from "./FilterDogs";
import whiskey from "./whiskey.jpeg";
import duke from "./duke.jpeg";
import perry from "./perry.jpeg";
import tubby from "./tubby.jpeg";

function App() {
  
  return (
    <BrowserRouter>
          <Routes>
        <Route exact path="/dogs" element={<DogList dogs={App.defaultProps.dogs}/>}>
        </Route>
        <Route path="/dogs/:name" element={<FilterDogs dogs={App.defaultProps.dogs} />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
       src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};



export default App;
