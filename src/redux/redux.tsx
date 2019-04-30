import { createContext, useContext } from "react";
import { UPDATE_WIND_SPEED } from "../component/weather-forecast/weather-forecast.const";

export const initialState = {
  windSpeed: 1
};

export const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_WIND_SPEED:
      console.log(state, action)
      return state
    default:
      return state;
  }
};

export const StateContext = createContext(initialState);
export const DispatchContext = createContext(null);
// export const getState = property => useContext(StateContext)[property];