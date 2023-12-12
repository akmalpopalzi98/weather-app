import { Box, Typography } from "@mui/material";
import { CurrentWeatherType } from "../types";

export const units = {
  CELSIUS: "°C",
};
console.log(import.meta.env);

const WeatherCard = ({
  weatherData,
  currentTemp,
  weatherDesc,
}: {
  weatherData: CurrentWeatherType;
  currentTemp: number;
  weatherDesc: string;
}) => {
  const formattedCurrentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Box
      sx={{
        backgroundColor: "rgba(160, 64, 0, 0.8)",
        height: "100%",
        width: "40%",
        display: "flex",
        flexDirection: "column", // Display items vertically
        justifyContent: "space-evenly", // Space items evenly vertically
        alignItems: "center", // Center items horizontally
      }}
    >
      <Typography>{weatherData.name}</Typography>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />
      <Typography sx={{ fontSize: "60px" }}>
        {currentTemp + units.CELSIUS}
      </Typography>
      <Typography>{weatherDesc}</Typography>
      <Typography>{formattedCurrentDate}</Typography>
    </Box>
  );
};

export default WeatherCard;
