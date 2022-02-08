import React, {useState} from "react";
import WeatherCard from "./components/weatherCard/weatherCard";
import Search from "./components/Search";
import "./App.scss";

export default function App() {
    const [weatherData, setWeatherData] = useState([]);
    const [location, setLocation] = useState("");
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const APP_URL = process.env.REACT_APP_API_URL;
    let reqUrl = '';
    let cityName = "";

    const weather = async () => {
        document.querySelector("input").addEventListener("input", (e) => {
            cityName = e.target.value;
        });

        try {
            if (cityName) reqUrl = `${APP_URL}/v1/forecast.json?key=${APP_KEY}&q=${cityName}&days=3&aqi=yes&alerts=yes`;
            const data = await fetch(reqUrl);
            const response = await data.json();

            if (!response.forecast || !cityName) {
                setWeatherData([]);
                setLocation("");
                return;
            }
            setWeatherData(response.forecast.forecastday);
            setLocation(response.location);
        } catch (e) {
        }
    };

    return (
        <div className="app">
            <h1 className="text-center text-3xl">Weather App</h1>
            <Search weather={weather}/>
            {weatherData.map((item, key) => (
                <WeatherCard data={item} key={key}/>
            ))}
        </div>
    );
}
