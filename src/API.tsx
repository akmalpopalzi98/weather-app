import axios from "axios";

const get_current_data = async (city: string, lat?: number, lon?: number) => {
  if (!lat && !lon) {
    const request = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city || "London",
          appid: "39beb0058dea7387317a41b76719c76e",
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
          appid: "39beb0058dea7387317a41b76719c76e",
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
          appid: "39beb0058dea7387317a41b76719c76e",
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
          appid: "39beb0058dea7387317a41b76719c76e",
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
