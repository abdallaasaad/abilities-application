const apiKey = "e4a24525e33cb43681ad27eb55dfb47a";

const weatherOfCountry = async () => {
  const cityName = document.getElementById("city-input");
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`
  );
  if (!response.ok)
    alert(
      "City Name Invalid! Our Awesome Servers did not find a match Result!"
    );

  const data = await response.json();

  //flag of the city's country
  const flagResponse = await fetch(
    `https://restcountries.com/v3.1/alpha/${data.sys.country}`
  );
  const dataOfFlag = await flagResponse.json();

  // return the relevant data about weather and country's flag
  return [
    dataOfFlag[0].flags.png,
    data.name,
    data.main.temp,
    data.main.feels_like,
    data.main.temp_min,
    data.main.temp_max,
    data.weather[0].description,
    data.wind.speed,
    data.main.humidity,
    data.sys.sunrise,
    data.sys.sunset,
  ];
};

export { weatherOfCountry };
