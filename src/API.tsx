import axios from "axios";

const get_current_data = async (city: string, lat?: number, lon?: number) => {
  if (!lat && !lon) {
    const request = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city || "London",
          appid: import.meta.env.VITE_APP_ID,
          units: "metric",
        },
      }
    );
    return request;
  } else {
    const request = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          appid: import.meta.env.VITE_APP_ID,
          units: "metric",
          lat: lat,
          lon: lon,
        },
      }
    );
    return request;
  }
};

const get_forecast_data = async (city: string, lat?: number, lon?: number) => {
  if (!lat && !lon) {
    const request = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          q: city || "London",
          appid: import.meta.env.VITE_APP_ID,
          units: "metric",
        },
      }
    );
    return request;
  } else {
    const request = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast",
      {
        params: {
          appid: import.meta.env.VITE_APP_ID,
          units: "metric",
          lat: lat,
          lon: lon,
        },
      }
    );
    return request;
  }
};

export { get_current_data, get_forecast_data };
