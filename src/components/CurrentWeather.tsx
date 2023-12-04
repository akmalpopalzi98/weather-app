import { Box, CircularProgress, Typography } from "@mui/material";
import { useContext } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import CurrentWeatherType from "../types";
import { capitalize } from "../helpers/utils";
import WeatherCard from "./WeatherCard";

const units = {
  CELSIUS: "°C",
};

const CurrentWeather = () => {
  const { currentWeather } = useContext(SearchBarContext);
  const TypedData = currentWeather as CurrentWeatherType;

  let currentTemp;
  let weatherDesc;
  let maxTemp;
  let minTemp;
  let feelsLike;
  let humidity;

  if (!TypedData.main) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  } else {
    currentTemp = Math.round(TypedData.main.temp);
    weatherDesc = capitalize(TypedData.weather[0].description);
    maxTemp = Math.round(TypedData.main.temp_max);
    minTemp = Math.round(TypedData.main.temp_min);
    feelsLike = Math.round(TypedData.main.feels_like);
    humidity = TypedData.main.humidity;
  }

  return (
    <Box
      sx={{
        backgroundColor: "rgba(39,59,70,0.5)",
        width: "57%",
        height: "40%",
        // margin: "0 auto",
        marginTop: "40px",
        display: "flex",
        justifyContent: "flex-start",
        gap: "30px",
      }}
    >
      {/* WeatherCard on the left */}
      <WeatherCard
        weatherData={TypedData}
        currentTemp={currentTemp}
        weatherDesc={weatherDesc}
      />

      {/* Container for Max Temperature, Min Temperature, and Feels Like */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "70%", // Adjust the width as needed
          height: "100%", // Adjust the height as needed
        }}
      >
        {/* Max Temperature and Humidity*/}
        <Box
          sx={{
            height: "48%",

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* Max Temperature*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: "48%",
            }}
          >
            <Typography>Max Temperature</Typography>
            <Typography sx={{ fontSize: "60px" }}>
              {maxTemp + units.CELSIUS}
            </Typography>
          </Box>
          {/* Humidity */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: "48%",
            }}
          >
            <Typography>Humidity</Typography>
            <Typography sx={{ fontSize: "60px" }}>{humidity + "%"}</Typography>
          </Box>
        </Box>

        {/* Container for Min Temperature and Feels Like */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "48%", // 48% for two items to fit
          }}
        >
          {/* Min Temperature */}
          <Box
            sx={{
              width: "48%", // 48% for two items to fit
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>Min Temperature</Typography>
            <Typography sx={{ fontSize: "60px" }}>
              {minTemp + units.CELSIUS}
            </Typography>
          </Box>

          {/* Feels Like */}
          <Box
            sx={{
              width: "48%", // 48% for two items to fit
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>Feels Like</Typography>
            <Typography sx={{ fontSize: "60px" }}>
              {feelsLike + units.CELSIUS}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CurrentWeather;
