import { Box } from "@mui/material";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import { get_current_data, get_forecast_data } from "../API";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, setCurrentWeather, setForecastWeather } =
    useContext(SearchBarContext);

  const [value, setValue] = useState("");

  const fetchCurrentData = async (city: string) => {
    try {
      const response = await get_current_data(city);
      setCurrentWeather(response.data);
    } catch (error) {
      alert("Location not found");
    }
  };

  const fetchForecastData = async (city: string) => {
    try {
      const response = await get_forecast_data(city);
      // setCurrentWeather(response.data);
      setForecastWeather(response.data);
    } catch (error) {
      alert("Location not found");
    }
  };

  useEffect(() => {
    // const storedData = localStorage.getItem("store");
    // if (storedData) fetchCurrentData(storedData);
    // else {
    //   fetchCurrentData(searchTerm);
    //   fetchForecastData(searchTerm);
    // }
    fetchCurrentData(searchTerm);
    fetchForecastData(searchTerm);
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
