import { Box, CircularProgress, Typography } from "@mui/material";
import { useContext } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import CurrentWeatherType from "../types";
import { capitalize } from "../helpers/utils";

const units = {
  CELSIUS: "°C",
};

const CurrentWeather = () => {
  const { currentWeather } = useContext(SearchBarContext);
  const TypedData = currentWeather as CurrentWeatherType;

  let currentTemp;
  let weatherDesc;

  console.log(TypedData);

  if (!TypedData.main) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  } else {
    currentTemp = Math.round(TypedData.main.temp);
    weatherDesc = capitalize(TypedData.weather[0].description);
  }

  // Get the current date in the desired format
  const formattedCurrentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box
      sx={{
        backgroundColor: "rgba(39,59,70,0.5)",
        width: "70%",
        height: "50%",
        margin: "0 auto",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#a04000",
          height: "100%",
          width: "30%",
          display: "flex",
          flexDirection: "column", // Display items vertically
          justifyContent: "space-evenly", // Space items evenly vertically
          alignItems: "center", // Center items horizontally
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
          }}
        >
          {TypedData.name}
        </Typography>
        <img
          src={`https://openweathermap.org/img/wn/${TypedData.weather[0].icon}@2x.png`}
        />
        <Typography sx={{ fontSize: "30px" }}>
          {currentTemp + units.CELSIUS}
        </Typography>
        <Typography>{weatherDesc}</Typography>
        <Typography>Today - {formattedCurrentDate}</Typography>
      </Box>
    </Box>
  );
};

export default CurrentWeather;
