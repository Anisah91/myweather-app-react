import React from "react";
import "./Weather.css";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div className="weather">
      <div className="container">
        <div className="weatherapp">
          <div className="card-body">
            <div className="cities">
              <div className="row"></div>
            </div>
            <br />
            <form id="search-form">
              <input
                type="text"
                placeholder="Enter your city"
                autoFocus={true}
                autoComplete="false"
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
            <p1 id="cityName">Copenhagen</p1>
            <br />

            <div className="top">
              Last Updated:
              <span className="currentday"> Monday 22:15</span>
              <br />
              <br />
              <div id="weatherDescription">Rain 🌧️</div>
            </div>
            <div className="weatherTemp">
              <img src="" id="icon" alt="weather-icon" rel="noreferrer" />
              <span id="currentTemp">8</span>
              <span className="units">°C</span>
            </div>
            <div className="description">
              <ul>
                <li>
                  Feels like: <span id="feelsLike">5 </span>℃
                </li>
                <li>
                  Wind speed: <span id="wind"></span>29km/h
                </li>
                <li>
                  Humidity: <span id="humidity">0 %</span>
                </li>
              </ul>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
