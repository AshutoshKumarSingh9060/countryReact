import React from "react";

function Country({name,capital,population,region,image}) {
  return (
    <>
      {" "}
      <a  href={`/countrypages?name=${name}`} className="country-items">
        <img src={image} alt= {`${name}-flag`} />
        <div className="country-info">
          <p>
            <b className="bold">{name}</b>
          </p>
          <p>
            <b>Population:</b>{population.toLocaleString()}
          </p>
          <p>
            <b>Region:</b>{region}
          </p>
          <p>
            <b>Capital:</b>{capital?capital:""}
          </p>
        </div>
      </a>{" "}
    </>
  );
}

export default Country;
