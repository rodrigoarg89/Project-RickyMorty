import axios from "axios";
import { useEffect, useState } from "react";
import ResidentInfo from "./components/ResidentInfo";
import "./styles.css";

function App() {
  const [character, setCharacter] = useState({});
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then((res) => setCharacter(res.data));
  }, []);

  console.log(character);

  const searchType = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${typeId}/`)
      .then((res) => setCharacter(res.data));
  };

  //

  return (
    <div>
      <div className="banner"></div>
      <div className="App">
        <h1 className="title">RICK AND MORTY WIKI</h1>

        <div>
          <input
            type="text"
            value={typeId}
            onChange={(e) => setTypeId(e.target.value)}
          />
          <button onClick={searchType}>Search</button>
        </div>

        <h1>
          <b>{character.name}</b>
        </h1>
        <div className="subtitle-flex">
          <h2>
            <b>Type:</b> {character.type}
          </h2>
          <h2>
            <b>Dimension:</b> {character.dimension}
          </h2>
          <h2>
            <b>Residents:</b> {character.residents?.length}
          </h2>
        </div>

        <ul className="residents-container">
          {character.residents?.map((resident) => (
            <ResidentInfo url={resident} key={resident} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
