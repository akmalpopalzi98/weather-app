import { get_current_data } from "../../API";

const fetchCurrentData = async (
  city: string,
  setCurrentWeather: (data: any) => void,
  lat?: number,
  lon?: number
) => {
  try {
    const response = await get_current_data(city, lat, lon);
    setCurrentWeather(response.data);
  } catch (error) {
    console.log("Location not found");
  }
};

export default fetchCurrentData;
