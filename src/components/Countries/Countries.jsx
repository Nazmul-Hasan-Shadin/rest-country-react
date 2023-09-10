import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [Countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [countryFlag, setConutryFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const visitedCountryHandle = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  const countryFlagHandler = (flag) => {
    const newFlags = [...countryFlag, flag];
    setConutryFlag(newFlags);
  };

  return (
    <div className="container mx-auto">
      <h3 className="font-bold"> Total country : {Countries.length}</h3>
      <h3 className="2xl">visited country {visitedCountry.length} </h3>
            {/* visited country display */}
      {
      
      
        visitedCountry.map((country) => (
            <li key={country.cca3}>{country.name?.common}</li>
        ))
      
      }

      <h3> Flags : {countryFlag.length}</h3>
      <div className="flex  gap-2">
        {/* display flags */}

            {
            
             countryFlag.map((flag, index) => (
            <img className="w-[100px]" key={index} src={flag}></img>
            ))
            
            }
      </div>
                      {/* single country display */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Countries.map((country) => {
          return (
            <Country
              key={country.cca3}
              country={country}
              countryFlagHandler={countryFlagHandler}
              visitedCountryHandle={visitedCountryHandle}
            ></Country>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
