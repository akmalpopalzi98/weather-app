import { get_forecast_data } from "../../API";

const fetchForecastData = async (
  city: string,
  setForecastWeather: (data: any) => void,
  lat?: number,
  lon?: number
) => {
  try {
    const response = await get_forecast_data(city, lat, lon);
    // setCurrentWeather(response.data);
    setForecastWeather(response.data);
  } catch (error) {
    console.log("Location not found");
  }
};

export default fetchForecastData;
