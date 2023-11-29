import { Box } from "@mui/material";
import { useContext } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import MainCard from "../components/MainCard";

const WeatherPage = () => {
  if (navigator.geolocation) {
    // Geolocation is supported
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    // Geolocation is not supported
    console.error("Geolocation is not supported by your browser");
  }
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
      <Box sx={{ width: "90%", backgroundColor: "rgba(150, 150, 150, 0.7)" }}>
        <MainCard location="" />
      </Box>
    </Box>
  );
};

export default WeatherPage;
