import axios from "axios";
import {Link} from "react-router-dom";

const API_URL = " localhost:5001/dogs";

async function getDogs(){
 return await axios.get(API_URL);
}

function DogList({dogs}){

  return (
    dogs.map(dog => (
      <ul>
        <li>
        <h3>{dog.name}</h3>
        <Link to={`/dogs/${dog.name}`}><img src={dog.src} alt={dog.name} /></Link>
        </li>
      </ul>
    ))
  )
}