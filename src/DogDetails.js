import { useParams } from "react-router-dom"

/** DogDetails component.
 * renders info about a specific dog
 *
 * props: dogs - array of dog objects [{name, age, src, facts}, ...]
 *
 * state: none
 */

function DogDetails({dogs}){
  const params = useParams();

  const dog = dogs.data.filter(d => (
    d.name === params.name
  ));

  return (
    dog.map(d => (
      <ul key={d.name}>
        <li>
        <h3>{d.name}</h3>
        <img src={`/${d.src}.jpg`} alt={d.name} />
        <p>Age: {d.age}</p>
        <ul> Facts about {d.name}:
          {d.facts.map(fact => (
            <li>{fact}</li>
          ))}
        </ul>
        </li>
      </ul>
    ))
  )
}

export default DogDetails;