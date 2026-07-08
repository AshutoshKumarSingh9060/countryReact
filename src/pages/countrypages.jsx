import React, { useContext } from "react";
import { data } from "../util/data";
import {  useParams } from "react-router-dom";
import { ThemeContext } from "../Components";

function Countrypages() {
  const [Dark, setDark] = useContext(ThemeContext);
  // const params = useParams();
  // console.log(params);
  const urlName = new URLSearchParams(location.search).get("name");
  const countryUrlName = data.find((items) => items.name === urlName);
  // console.log(countryUrlName.languages);

  let lang = "";
  countryUrlName.languages.forEach((items) => {
    lang += `${items.name}, `;
  });

  let borderCountry = "";
  if (countryUrlName.borders) {
    countryUrlName.borders.forEach((items) => {
      borderCountry += `${items},`;
    });
  }
  const handleBackBtm = () => {
    history.back();
  };
  return (
    <>
      <main className="main">
        <button type="button" className="back-button" onClick={handleBackBtm}>
          Back
        </button>
        <div className="counrty-display">
          <div className="flag-image">
            <img src={countryUrlName.flags.svg} alt="Afghanistan-flag" />
          </div>
          <div className="counrty-info">
            <p>
              <b className="country-name">{countryUrlName.name}</b>
            </p>
            <p>
              <b>Population:</b>
              {countryUrlName.population.toLocaleString()}
            </p>
            <p>
              <b>Region:</b>
              {countryUrlName.region}
            </p>
            <p>
              <b>Sub Region:</b>
              {countryUrlName.subregion}
            </p>
            <p>
              <b>capital:</b>
              {countryUrlName.capital}
            </p>
            <p>
              <b>Border Countries:</b>
              {countryUrlName.borders ? borderCountry : ""}
            </p>
          </div>
          <div className="country-info">
            <p>
              <b>Top Level Domain:</b>be
            </p>
            <p>
              <b>Currencies:</b>
              {countryUrlName.currencies
                ? countryUrlName.currencies[0].code
                : ""}
            </p>
            <p>
              <b>Languages:</b>
              {lang}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Countrypages;
