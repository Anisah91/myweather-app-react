import React from "react";

import "./Weather.css";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div className="weatherapp">
      <div className="container">
        <div className="card-body">
          <div className="cities">
            <div className="row"></div>
          </div>
          <br />
          <form id="search-form" className="mt-3">
            <input
              type="text"
              placeholder="Please enter a city name"
              autoFocus={true}
              id="search-text-input"
            />
            <button type="button" className="btn btn-primary">
              Search
            </button>

            <button
              type="button"
              className="btn btn-success"
              id="currentLocation">
              Current Location
            </button>
          </form>
          <br />
          <p id="cityName">Copenhagen</p>

          <div className="top">
            Last Updated: <span className="currentday">Monday 22:15</span>
            <br />
            <br />
            <div id="weatherDescription">Rain 🌧️</div>
          </div>

          <div className="weatherTemp">
            <img src="" id="icon" alt="weather-icon" />
            <span id="currentTemp">8</span>
            <span className="units">°C</span>
          </div>
          <div className="description mt-5 mb-3">
            <ul>
              <li>
                Feels like: <span id="feelsLike">5 </span>℃
              </li>
              <li>
                Wind speed: <span id="wind">29km/h</span>
              </li>
              <li>
                Humidity: <span id="humidity">0 %</span>
              </li>
            </ul>
          </div>

          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
