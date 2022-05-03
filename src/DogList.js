import { Link } from "react-router-dom";


/** DogList component
 * renders list of all dogs with links to each.
 *
 * props: dogs - array of dog objects [{name, age, src, facts}, ...]
 *
 * state: none
 */
function DogList({dogs}){

  return (
    <ul>
    {dogs.data.map(dog => (
        <li key={dog.name}>
        <h3>{dog.name}</h3>
        <Link to={`/dogs/${dog.name}`}><img src={`/${dog.src}.jpg`} alt={dog.name} /></Link>
        </li>
      )
    )}
    </ul>
  )
}

export default DogList;