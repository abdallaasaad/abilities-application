class Weather {
  getWeather() {
    const weatherWidget = document.getElementById("weatherWidget");

    const weatherData = {
      temperature: 35,
      condition: "Sunny",
      description: "This feature is only </br> a weather's simulator",
    };
    weatherWidget.innerHTML = `
            <h3>Today's Weather</h3>
            <p>${weatherData.temperature}°C, ${weatherData.condition}</br></br> <h3><span style="color:red">Note</span></h3> ${weatherData.description}</p>
        `;
  }
}
