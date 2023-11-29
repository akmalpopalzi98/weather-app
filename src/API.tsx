import axios from "axios";

const get_data = async (city: string) => {
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

export { get_data };
