import React, { useState } from 'react';
import './Forecast.css';

function Forecast() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7c33ae505amsha6e0babdf8c8189p189ebejsn5d95476777dc',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    })
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Sprawdż pogodę w jakim mieście tylko zechcesz!!!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Miasto:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{width:'20vw'}}
        />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div className='forecast-container'>
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Forecast;
