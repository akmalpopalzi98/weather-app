import { Box } from "@mui/material";

const WeatherPage = () => {
  const location = navigator.geolocation;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        height: "70%",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{ width: "90%", backgroundColor: "rgba(150, 150, 150, 0.7)" }}
      ></Box>
    </Box>
  );
};

export default WeatherPage;
