import { Box, Typography } from "@mui/material";

const TodaysForecast = () => {
  return (
    <Box
      sx={{
        height: "40%",
        width: "30%",
        backgroundColor: "grey",
        marginTop: "40px",
      }}
    >
      <Typography>Todays Forecast</Typography>
    </Box>
  );
};

export default TodaysForecast;
