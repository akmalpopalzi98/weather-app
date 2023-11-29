import { Box } from "@mui/material";
import { useContext } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import MainCard from "../components/MainCard";

const WeatherPage = () => {
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
