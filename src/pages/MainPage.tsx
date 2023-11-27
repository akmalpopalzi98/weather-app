import { Box, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import img from "../assets/pexels-stein-egil-liland-12035611.jpg";
import { useEffect, useState } from "react";

function MainPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundColor = scrollPosition > 0 ? " #273746 " : "transparent";

  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "0 auto",
        height: "900px",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        paddingTop: "60px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "25px",
          textAlign: "left",
          paddingTop: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
          color: "white",
          position: "fixed",
          top: "0px",
          width: "100%",
          backgroundColor: backgroundColor,
          tranition: "background-color 0.10s ease",
        }}
      >
        Weather <WbSunnyIcon fontSize="medium" sx={{ color: "orange" }} />
      </Typography>
      <SearchBar />
    </Box>
  );
}

export default MainPage;
