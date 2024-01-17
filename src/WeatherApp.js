import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import Footer from "./Footer";
import { Rings } from "react-loader-spinner";

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
            <br />

            <div className="top">
              Last Updated:
              <span className="currentday"> Monday 22:15</span>
              <br />
              <br />
              <div id="weatherDescription">Rain 🌧️</div>
            </div>

            <div className="weatherTemp">
              <img src="" id="icon" rel="noreferrer" alt="weather-icon" />
              <span id="currentTemp">8</span>
              <span className="units">°C</span>
            </div>

            <div className="spinner-ring">
              <Rings
                visible={true}
                height="150"
                width="150"
                color="darkblue"
                ariaLabel="rings-loading"
                wrapperStyle={{}}
                wrapperClass="spinner"
              />
            </div>
            <div
              className="description mt-5
            mb-5">
              <ul className="mb-5">
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
