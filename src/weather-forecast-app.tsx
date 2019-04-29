import React from "react";
import Sun from "./component/sun";
import Windmill from "./component/windmill";
import Clouds from "./component/clouds";

const WeatherForecast: React.FC = () => {
  return (
    <div className="content">
      <h1>Weather Forecast</h1>
      <Sun />
      <Clouds />
      <Windmill />
    </div>
  );
};

export default WeatherForecast;
