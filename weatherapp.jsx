import { useState, useEffect } from "react";

function WeatherApp() {
 const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");

  const apiKey = "180e0e45f9c47d09faa895a1219e48c3";

  useEffect(() => {

    if (city !== "") {

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then(response => response.json())
        .then(data => {
          setTemperature(data.main.temp);
          setDescription(data.weather[0].description);
        });

    }

  }, [city]);

  return (
    <div className="container">
      <div className="card">
        <h2>🌤 Weather App</h2>

        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
        />

        {temperature && (
          <div className="weather-info">
            <h3>{city}</h3>
            <p>Temperature: {temperature} °C</p>
            <p>Condition: {description}</p>
          </div>
        )}
      </div>
    </div>
  );

 
}

export default WeatherApp;

