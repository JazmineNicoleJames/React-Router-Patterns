import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const FilterDogs = ({dogs}) => {
    const { name } = useParams();
    console.log('dogssssss', dogs)
    if(name){
        console.log('name', name)
        const currentDog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        console.log('current dog', currentDog)
        return <DogDetails dog={currentDog} />
        }
    return null;
}

export default FilterDogs;