import React, { useState } from "react";
import WeatherCard from "./components/weatherCard/weatherCard";
import "./App.scss";

export default function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [location, setLocation] = useState("");
  const APP_KEY = "208f47d80e0542f9a47152149211212";
  let inputValue = "";

  const getData = async (value) => {
    document.querySelector("input").addEventListener("input", (e) => {
      inputValue = e.target.value;
    });
    if (inputValue) {
      try {
        const data = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3&aqi=yes&alerts=yes`
        );
        const result = await data.json();
        setWeatherData(result.forecast.forecastday);
        setLocation(result.location);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          placeholder="Search a city..."
          onChange={() => getData(inputValue)}
        />
      </div>
      <h2>{location ? location.name : ""}</h2>
      {weatherData.map((item, key) => (
        <WeatherCard location={location} data={item} key={key} />
      ))}
    </div>
  );
}
