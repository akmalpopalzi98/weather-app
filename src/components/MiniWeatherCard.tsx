import { Box, Typography } from "@mui/material";
import { MiniCardType } from "../types";
import { units } from "./WeatherCard";

const MiniWeatherCard = ({ data }: { data: MiniCardType }) => {
  const date = new Date(data.dt_txt).getHours();
  const amOrPm = date > 11 ? "pm" : "am";
  return (
    <Box
      sx={{
        width: "100%",
        height: "25%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Typography>
        {date}
        {amOrPm}
      </Typography>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
      />
      <Typography>{Math.round(data.main.temp) + units.CELSIUS}</Typography>
    </Box>
  );
};

export default MiniWeatherCard;
