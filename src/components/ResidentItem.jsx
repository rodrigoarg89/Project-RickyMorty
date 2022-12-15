import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ResidentItem.css";

const ResidentItem = ({ url }) => {
  const [resident, setResident] = useState({});
  const [color, setColor] = useState("green");

  useEffect(() => {
    if(url){
      const promise = axios(url);
      promise.then((res) => {
        setResident({
          image: res.data.image,
          name: res.data.name,
          status: res.data.status,
          species: res.data.species,
          origin: res.data.origin.name,
          episodes: res.data.episode.length
        });
        if (resident.status === "Alive") {
          setColor("green");
        } else if (resident.status === "Dead") {
          setColor("red");
        } else {
          setColor("gray");
        }
      });
    }
  }, [url, resident.status]);

  return (
    <div className="col-md-6">
      <div className="card">
        <img src={resident.image} alt="" />
        <div className="info">
          <p>
            <b>{resident.name}</b>
          </p>
          <p>
            <span className={"circle " + color}></span>
            {resident.status} - {resident.species}
          </p>
          <p className="description">origin</p>
          <p>{resident.origin}</p>
          <p className="description">episodes where appear</p>
          <p>{resident.episodes}</p>
        </div>
      </div>
    </div>
  );
};

export default ResidentItem;