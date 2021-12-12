import React from "react";
import WeatherCard from "./components/weatherCard/weatherCard";
import "./App.scss";

export default function App() {
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search a city..." />
        <button>Search</button>
      </div>
    </div>
  );
}
