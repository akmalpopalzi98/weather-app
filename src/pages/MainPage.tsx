import { Box, CircularProgress, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { get_background_image } from "../API";
import { useEffect, useState } from "react";

function MainPage() {
  const [image, setImage] = useState("");
  //   const [loading, setLoading] = useState(true);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const result = await get_background_image();
  //         setImage(result);
  //         setLoading(!loading);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  return (
    <Box
      sx={{
        textAlign: "center",
        margin: "0 auto",
        height: "900px",
        // backgroundImage: `url(${image})`,
        backgroundColor: "beige",
      }}
    >
      <Typography sx={{ fontWeight: 700, fontSize: "50px" }}>
        Weather <WbSunnyIcon fontSize="large" sx={{ color: "yellow" }} />
      </Typography>
      <SearchBar />
    </Box>
  );
}

export default MainPage;
