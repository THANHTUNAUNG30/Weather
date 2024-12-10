import React, { useState, useEffect } from "react";
import { FiWind } from "react-icons/fi";
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';


const Card = ({ weatherData }) => {

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


    if(JSON.stringify(weatherData) !== "{}"){
      return(
        <div className="w-100 d-flex justify-content-center mb-5">
          <div className="w-50 bg-light p-5 shadow-sm d-flex flex-column align-items-center">
            <p><Clock value={value} /></p>
            <h1>{weatherData.name}, {weatherData.sys.country}</h1>
            <h1><img src={`http://openweathermap.org//img/w/${weatherData.weather[0].icon}.png`} />{weatherData.main.temp}°C</h1>
            <h5><FiWind /> {weatherData.wind.speed}m/s</h5>
            <h5>Humidity: {weatherData.main.humidity}%</h5>

            <h5>Visibility: {weatherData.visibility / 1000} km</h5>
            <h1>Feels like {weatherData.main.feels_like}°C.</h1>
          </div>
        </div>
      )
    }
};

export default Card;
