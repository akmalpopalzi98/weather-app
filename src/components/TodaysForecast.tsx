import { Box, Typography } from "@mui/material";
import MiniWeatherCard from "./MiniWeatherCard";
import { useContext } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import { ForecastWeatherType } from "../types";

const TodaysForecast = () => {
  const { forecastWeather } = useContext(SearchBarContext);
  const TypedData = forecastWeather as ForecastWeatherType;
  let renderedItems;
  if (TypedData.list) {
    const firstThreeItems = TypedData.list.slice(0, 3);

    renderedItems = firstThreeItems.map((obj) => {
      return <MiniWeatherCard key={obj.dt_txt} data={obj} />;
    });
  }
  return (
    <Box
      sx={{
        height: "40%",
        width: "30%",
        backgroundColor: "rgba(39,59,70,0.5)",
        marginTop: "110px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Typography>Todays Forecast</Typography>
      {renderedItems}
    </Box>
  );
};

export default TodaysForecast;
