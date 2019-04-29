import React from "react";
import Sun from "./component/sun";

const WeatherForecast: React.FC = () => {
  return (
    <div className="content">
      <h1>Weather Forecast</h1>
      <Sun />
    </div>
  );
};

export default WeatherForecast;
