import React from "react";
import { UseWeather } from "../context/Weather";
import { IoMdRefresh } from "react-icons/io";

const Card = () => {
  const weather = UseWeather();
  const handleRefresh = () => {
    weather.fetchWeatherData();
    console.log(weather.weatherData);
  };
  return (
    <div
      className="p-2 md:px-4 w-[300px] md:w-[450px] pb-8 pt-3 bg-blue-50 shadow-lg flex flex-col gap-5 mx-auto"
      data-aos="zoom-in-up"
    >
      <div className="p-2 shadow-md flex justify-between">
        <h1 className="text-xl font-semibold flex items-center relative">
          Weather <span className="text-orange-500">App</span>
          <img
            className="absolute  md:-top-2 left-28 w-[50px] h-[50px]"
            src={weather?.weatherData?.current?.condition?.icon}
            alt=""
          />
        </h1>
        <button
          onClick={handleRefresh}
          className="text-3xl p-2 active:bg-gray-300 active:text-2xl"
        >
          <IoMdRefresh />
        </button>
      </div>
      <div className=" flex justify-between gap-2">
        <div className="flex gap-1 text-sm md:text-md w-1/2">
          <span className="">
            temp : {weather?.weatherData?.current?.temp_c} <sup>o</sup>C
          </span>
          <span className="">
            | {weather?.weatherData?.current?.temp_f} <sup>o</sup>F
          </span>
        </div>
        <div className="flex flex-col gap-2 text-sm md:text-md">
          <span className="">
            Precipitation: {weather?.weatherData?.current?.precip_in}%
          </span>
          <span className="">
            Humidity: {weather?.weatherData?.current?.humidity}%
          </span>
          <span className="">
            Wind: {weather?.weatherData?.current?.wind_kph}km/h
          </span>
        </div>
      </div>
      <div className="">
        <img
          className="max-w-[150px] max-h-[200px] m-auto"
          src={weather?.weatherData?.current?.condition?.icon}
          alt=""
        />
      </div>

      <p className="flex flex-col text-sm md:text-md">
        <span className="">
          Last Update: {weather?.weatherData?.current?.last_updated}
        </span>
        Location : {weather?.weatherData?.location?.name},{" "}
        {weather?.weatherData?.location?.region},{" "}
        {weather?.weatherData?.location?.country}
      </p>
    </div>
  );
};

export default Card;
