import { Box } from "@mui/material";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import useLocation from "../hooks/useLocation";
import fetchForecastData from "../helpers/api/FetchForecast";
import fetchCurrentData from "../helpers/api/FetchCurrentData";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, setCurrentWeather, setForecastWeather } =
    useContext(SearchBarContext);

  const [value, setValue] = useState("");

  const fetchLocation = async () => {
    const locationObj = await useLocation();
    return locationObj;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationObj = await fetchLocation();

        if (locationObj) {
          const { latitude, longitude } = locationObj;
          await fetchCurrentData(
            searchTerm,
            setCurrentWeather,
            latitude,
            longitude
          );
          await fetchForecastData(
            searchTerm,
            setForecastWeather,
            latitude,
            longitude
          );
        }
      } catch (error) {
        // Handle geolocation error separately
        if (error instanceof GeolocationPositionError) {
          console.log("Geolocation error. Fallback to default location.");
          await fetchCurrentData(searchTerm, setCurrentWeather);
          await fetchForecastData(searchTerm, setForecastWeather);
        } else {
          console.error("Error fetching data:", error);
        }
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
    await fetchCurrentData(searchTerm, setCurrentWeather);
    await fetchForecastData(searchTerm, setForecastWeather);
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
