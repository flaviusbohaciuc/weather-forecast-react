import React, { useReducer } from "react";
import Sun from "./component/sun";
import Windmill from "./component/windmill";
import Clouds from "./component/clouds";
import WeatherForecast from "./component/weather-forecast";
import { DispatchContext, StateContext } from "./redux";
import { initialState, reducer } from "./redux";

const WeatherForecastApp: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="content">
          <h1>Weather Forecast</h1>
          <Sun />
          <Clouds />
          <Windmill />
          <WeatherForecast />
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default WeatherForecastApp;
