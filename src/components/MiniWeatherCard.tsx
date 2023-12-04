import { Box } from "@mui/material";
import { MiniCardType } from "../types";

const MiniWeatherCard = ({ data }: { data: MiniCardType }) => {
  return (
    <Box sx={{ width: "80%", height: "25%", backgroundColor: "green" }}>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
      />
    </Box>
  );
};

export default MiniWeatherCard;
