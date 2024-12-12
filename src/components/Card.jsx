import React from "react";
import { UseWeather } from "../context/Weather";

const Card = () => {
  const weather = UseWeather();
  return (
    <div className="px-4 w-[350px] md:w-[450px] pb-8 pt-3 bg-blue-50 shadow-lg flex flex-col gap-5">
      <h1 className="text-xl font-semibold">
        Weather <span className="text-orange-500">App</span>
      </h1>
      <div className=" flex justify-between gap-2">
        <div className="flex gap-2">
          <span className="">
            temperature : {weather?.weatherData?.current?.temp_c} <sup>o</sup>C
          </span>
          <span className="">
            | {weather?.weatherData?.current?.temp_f} <sup>o</sup>F
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="">
            Precipitation: {weather?.weatherData?.current?.precip_in}%
          </span>
          <span className="">
            Humidity: {weather?.weatherData?.current?.humidity}%
          </span>
          <span className="">
            Wind: humidity {weather?.weatherData?.current?.wind_kph}km/h
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

      <p className="flex flex-col">
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
