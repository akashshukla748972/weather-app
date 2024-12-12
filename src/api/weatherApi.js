const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=6bda965333ac461c9c3182032241212&";

export const getWeather = async (city) => {
  const response = await fetch(`${baseURL}q=${city}&api=no`);
  return await response.json();
};

export const getWeatherByLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}q=${lat},${lon}&api=no`);
  return await response.json();
};
