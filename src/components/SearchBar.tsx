import { Box } from "@mui/material";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import { get_current_data, get_forecast_data } from "../API";
import useLocation from "../hooks/useLocation";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, setCurrentWeather, setForecastWeather } =
    useContext(SearchBarContext);

  const [value, setValue] = useState("");

  const fetchLocation = async () => {
    const locationObj = await useLocation();
    return locationObj;
  };

  const fetchCurrentData = async (city: string, lat?: number, lon?: number) => {
    try {
      const response = await get_current_data(city, lat, lon);
      setCurrentWeather(response.data);
    } catch (error) {
      alert("Location not found");
    }
  };

  const fetchForecastData = async (
    city: string,
    lat?: number,
    lon?: number
  ) => {
    try {
      const response = await get_forecast_data(city, lat, lon);
      // setCurrentWeather(response.data);
      setForecastWeather(response.data);
    } catch (error) {
      alert("Location not found");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationObj = await fetchLocation();

        if (locationObj) {
          const { latitude, longitude } = locationObj;
          await fetchCurrentData(searchTerm, latitude, longitude);
          await fetchForecastData(searchTerm, latitude, longitude);
        } else {
          // Handle case where location data is not available
          fetchCurrentData(searchTerm);
          fetchForecastData(searchTerm);
        }
      } catch (error) {
        console.error("Error fetching data:");
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setValue(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue("");
    // localStorage.setItem("store", searchTerm); May remove
    await fetchCurrentData(searchTerm);
    await fetchForecastData(searchTerm);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <input
        style={{
          width: "40%",
          height: "35px",
          border: "none",
          fontSize: "15px",
          textAlign: "center",
          padding: "0",
        }}
        placeholder="Search"
        onChange={handleChange}
        value={value}
      />
    </Box>
  );
};

export default SearchBar;
