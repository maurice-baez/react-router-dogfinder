import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

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
        <Routes>
          <Route path="/" ></Route>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;