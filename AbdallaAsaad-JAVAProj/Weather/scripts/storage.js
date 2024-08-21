import { weatherOfCountry } from "./CityWeather.js";

const dataArrayThatReturnedFromTheStorage = async () => {
  const dataArray = await weatherOfCountry();
  localStorage.setItem("data", JSON.stringify(dataArray));
  return JSON.parse(localStorage.getItem("data"));
};

export { dataArrayThatReturnedFromTheStorage };
