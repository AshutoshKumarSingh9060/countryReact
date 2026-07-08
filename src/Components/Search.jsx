import React, { useState } from "react";
import { data } from "../util/data";

function Search({setSearch}) {
  return (
    <>
      <div className="search-filter-container">
        <div className="search-input">
          <input placeholder="Search for Country..." onChange={(e)=> (setSearch(e.target.value))} />
        </div>
        <div className="filter-input">
          <select name="Filter">
            <option value="Filter by region" hidden>
              Filter by region
            </option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Search;
