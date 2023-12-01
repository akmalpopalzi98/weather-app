import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import CurrentWeatherType from "../types";

const CurrentWeather = () => {
  const { currentWeather } = useContext(SearchBarContext);
  const TypedData = currentWeather as CurrentWeatherType;
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
      <Typography>{TypedData.name}</Typography>
    </Box>
  );
};

export default CurrentWeather;
