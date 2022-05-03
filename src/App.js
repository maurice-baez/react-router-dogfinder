import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList"


const API_URL = "http://localhost:5001/dogs";

/** App component
 *  renders dogfinder app.
 *
 * props: none
 *
 * state: dogs - array of dog objects [{name, age, src, facts}, ...]
 */

function App() {
  const [dogs, setDogs] = useState({
    data:null,
    isLoading: true});

  useEffect(function fetchDogsWhenMounted() {
    async function getDogs(){
      const dogList = await axios.get(API_URL);
      setDogs({data: dogList.data, isLoading: false});
    }
    getDogs();
  }, [])

  if(dogs.isLoading) return <i>Loading...</i>;

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RouteList dogs={dogs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;