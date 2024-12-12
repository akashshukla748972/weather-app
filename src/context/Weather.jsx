import { createContext, useContext, useState } from "react";
import { getWeather, getWeatherByLocation } from "../api/weatherApi";

export const WeatherContext = createContext(null);

export const UseWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchWeatherCity, setSearchWeatherCity] = useState(null);

  const fetchWeatherData = async () => {
    const response = await getWeather(searchWeatherCity);
    setWeatherData(response);
  };

  const fetchUserCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherByLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setWeatherData(data));
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        searchWeatherCity,
        setSearchWeatherCity,
        fetchWeatherData,
        fetchUserCurrentLocation,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
