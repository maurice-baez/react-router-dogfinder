import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function RouteList({dogs}) {

  return (
        <Routes>
          <Route path="/" element={<Navigate to="/dogs" />}></Route>
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
        </Routes>
  )
}

export default RouteList;
