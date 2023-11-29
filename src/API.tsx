import axios from "axios";

const get_data = async (city: string) => {
  const request = await axios.get("api.openweathermap.org/data/2.5/weather", {
    params: {
      q: city,
      APPID: "39beb0058dea7387317a41b76719c76e",
    },
  });

  return request;
};

export { get_data };
