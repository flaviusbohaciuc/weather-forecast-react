import React from "react";
import Sun from "./component/sun";
import Windmill from "./component/windmill";

const WeatherForecast: React.FC = () => {
  return (
    <div className="content">
      <h1>Weather Forecast</h1>
      <Sun />
      <Windmill />
    </div>
  );
};

export default WeatherForecast;
