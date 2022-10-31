import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import WeatherSearch from "./WeatherSearch";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className="App">
      <h1>React Weather App</h1>
      <WeatherSearch />
    </div>
  </React.StrictMode>
);

WeatherSearch();
