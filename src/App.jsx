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
    <div className="main">
      <div className="banner"></div>
      <div className="rm-logo">
          <img
            className="logo-poke"
            src="https://vignette.wikia.nocookie.net/logopedia/images/b/b1/Rick_and_Morty.svg/revision/latest?cb=20180522080112"
            alt=""
          />
      </div>
      <div className="App">
        <div className="wiki">
          <h1>RICK AND MORTY WIKI</h1>

        </div>
        <div className="type-id">
          <div>
            <input
            id="wiki"
              className="input-type"
              type="text"
              value={typeId}
              placeholder="please, enter a location number (1-126). Example 20"
              onChange={(e) => setTypeId(e.target.value)}
            />
            <button className="btn-type" onClick={searchType}>
              Search
            </button>
          </div>
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
      </div>
      <div className="residents-container">
        {character.residents?.map((resident) => (
          <ResidentInfo url={resident} key={resident} />
        ))}
      </div>
    </div>
  );
}
export default App;
