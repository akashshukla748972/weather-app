import React from "react";
import { UseWeather } from "../context/Weather";

const Search = () => {
  const weather = UseWeather();
  return (
    <>
      <input
        onChange={(e) => weather.setSearchWeatherCity(e.target.value)}
        type="text"
        className="py-2 px-3 text-xl outline-none border-none"
        placeholder="Search weather"
        autoFocus
      />
    </>
  );
};

export default Search;
