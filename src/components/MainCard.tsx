import { Box } from "@mui/material";

const MainCard = ({ location }: { location: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        height: "30%",
      }}
    >
      <Box
        sx={{
          width: "70%",
          backgroundColor: " #154360 ",
          borderRadius: "20px",
        }}
      >
        MainCard
      </Box>
    </Box>
  );
};

export default MainCard;
