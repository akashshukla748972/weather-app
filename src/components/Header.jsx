import React from "react";
import Search from "./Search";
import Button from "./Button";
import { UseWeather } from "../context/Weather";

const Header = () => {
  const weather = UseWeather();
  const handleSearch = async () => {
    await weather.fetchWeatherData();
  };
  return (
    <header className="bg-blue-50 py-6 flex justify-center items-center shadow-lg">
      <div className="border-2 flex">
        <Search />
        <Button text={"Search"} onClick={handleSearch} />
      </div>
    </header>
  );
};

export default Header;
