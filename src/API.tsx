import axios from "axios";

const get_current_data = async (city: string) => {
  const request = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city || "london",
        appid: "39beb0058dea7387317a41b76719c76e",
      },
    }
  );

  return request;
};

const get_forecast_data = async (city: string) => {
  const request = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    {
      params: {
        q: city || "london",
        appid: "39beb0058dea7387317a41b76719c76e",
      },
    }
  );

  return request;
};

export { get_current_data, get_forecast_data };
