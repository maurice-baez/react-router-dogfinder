import axios from "axios";
const API_URL = "/localhost:5001/dogs";

async function getDogs(){
  return await axios.get(API_URL);
 }

 export { getDogs }