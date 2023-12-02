import { Box, Typography } from "@mui/material";
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
    return <Box>Loading</Box>;
  } else {
    currentTemp = Math.round(TypedData.main.temp);
    weatherDesc = capitalize(TypedData.weather[0].description);
  }

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
      <Typography sx={{ fontSize: "30px" }}>{TypedData.name}</Typography>
      <Box>
        <Typography sx={{ fontSize: "30px" }}>
          {currentTemp + units.CELSIUS}
        </Typography>
        <Typography>{weatherDesc}</Typography>
      </Box>
    </Box>
  );
};

export default CurrentWeather;
