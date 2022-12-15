import React, { useState } from "react";
import SearchResult from "./SearchResult.js";
import ResidentContainer from "../Residents/ResidentContainer.js";
import LocationContainer from "../Location/LocationContainer.js";

const query = Math.floor(Math.random() * 108) + 1;

const SearchBox = () => {
  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/location/${query}`
  );
  const [search, setSearch] = useState("");
  const handleSearch = (url) => {
    setSearch("");
    setUrl(url);
  };
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="type a location"
      />
      {search !== "" && (
        <SearchResult
          url={`https://rickandmortyapi.com/api/location/?name=${search}`}
          handle={handleSearch}
        />
      )}
      <LocationContainer url={url} />
      <ResidentContainer url={url} />
    </>
  );
};

export default SearchBox;