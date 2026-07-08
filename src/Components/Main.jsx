import React from "react";
import { data } from "../util/data";
import Country from "./Country";

function Main({ search }) {
  let countryData;
  if(search){
    countryData=data.find((items)=> (items.name === search))
  }
  const array = countryData ? (
    <Country
      key={countryData.name}
      name={countryData.name}
      population={countryData.population}
      region={countryData.region}
      capital={countryData.capital}
      image={countryData.flags.svg}
    />
  ) : (
    data.map((items) => (
      <Country
        key={items.name}
        name={items.name}
        population={items.population}
        region={items.region}
        capital={items.capital}
        image={items.flags.svg}
      />
    ))
  );
  // data.forEach((i) => console.log(i.capital));

  return (
    <>
      <div className="country-list">{array}</div>
    </>
  );
}

export default Main;
