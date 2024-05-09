import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.js"


function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then((resp) => resp.json())
    .then((data) => setActors(data))
  }, [])

  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
