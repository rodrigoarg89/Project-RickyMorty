import './App.css';
import SearchBox from "./Components/Search/SearchBox.js";

document.body.style = "background: #272121";

function App() {
  return (
    <>
      <div className="banner"></div>
      <div className="container">
        <h1>Rick and Morty Wiki</h1>
        <SearchBox />
      </div>
    </>
  );
}

export default App;
