
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


function DogList({dogs}){

  return (
    dogs.data.map(dog => (
      <ul>
        <li>
        <h3>{dog.name}</h3>
        <Link to={`/dogs/${dog.name}`}><img src={`${dog.src}.jpg`} alt={dog.name} /></Link>
        </li>
      </ul>
    ))
  )
}

export default DogList;