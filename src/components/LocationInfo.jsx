const LocationInfo = ({ name, type, dimension, population }) => {
    return (
      <div>
        <h2 className="text-center">{name}</h2>
        <div className="row">
          <div className="col-sm-4 text-center">
            <b>type: </b>
            {type}
          </div>
          <div className="col-sm-4 text-center">
            <b>dimension: </b>
            {dimension}
          </div>
          <div className="col-sm-4 text-center">
            <b>population: </b>
            {population}
          </div>
        </div>
      </div>
    );
  };
  
  export default LocationInfo;