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
        display: "flex",
        justifyContent: "center",
        height: "50%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(39,59,70,0.5)",
          marginTop: "20px",
          width: "70%",
          height: "80%",
        }}
      >
        <Typography>{TypedData.name}</Typography>
      </Box>
    </Box>
  );
};

export default CurrentWeather;
