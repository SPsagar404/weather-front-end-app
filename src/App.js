import React, { useState } from 'react';
import {WeatherCard} from "./components/weather/pages/WeatherCard";
import WeatherService from "./components/weather/services/WeatherService";


function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await WeatherService.getWeatherByCity(city);
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
      setLoading(false);
    }
  };

  return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 mx-auto">
            <h2 className="mb-4 text-center">Weather App</h2>
            <div className="input-group mb-3">
              <input
                  type="text"
                  className="form-control"
                  placeholder="Enter city"
                  value={city}
                  onChange={handleInputChange}
              />
              <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSearch}
                  disabled={loading}
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {weatherData && <WeatherCard data={weatherData} />}
          </div>
        </div>
      </div>
  );
}

export default App;
