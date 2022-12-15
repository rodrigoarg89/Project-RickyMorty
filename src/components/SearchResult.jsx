import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SearchResult.css";

const SearchResult = ({ url, handle }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const promise = axios(url);
    promise.then((res) => setResults(res.data.results.slice(0, 7)));
    // Este catch era para que no saltaran errores al
    // colocar palabras que no coincidieran. Aunque
    // Al parecer tampoco pudo corregir eso
    promise.catch(() => {});
  }, [url]);

  const resultsList = results.map((value) => (
    <button
      onClick={() => handle(value.url)}
      key={value.url.substring(41)}
    >
      {value.name}
    </button>
  ));

  return <div className="results">{resultsList}</div>;
};

export default SearchResult;
