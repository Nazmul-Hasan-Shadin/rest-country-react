import { useState } from "react";

const Country = ({ country,visitedCountryHandle,countryFlagHandler }) => {
  console.log(country);
  const [visited, setVisited] = useState(false);
  const { flags, population, name, region, cca3 } = country;

  const handleVisited =()=>{
        setVisited(!visited);
  }
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={flags.png} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body text-start text-center">
        <h2 className="text-2xl">Name : {name?.common}</h2>
        <h2 className="text-start">population : {population}</h2>

        <p> Area : {region} </p>
        <p>
          {" "}
          <small> code : {cca3} </small>
        </p>
        <div className="card-actions">
            <button onClick={()=>visitedCountryHandle(country)} className="btn btn-primary block ">Mark Visited</button> 
           <button onClick={()=>countryFlagHandler(country.flags.png)} className="btn btn-primary">Add Flag</button> 

          <button onClick={handleVisited} className="btn btn-primary px-6 block ">{visited ? 'visited': 'Going'}</button>

          {
            visited ? 'i already visited this country' : 'i want to go this country'
          }
        </div>
      </div>
    </div>
  );
};

export default Country;
