import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import SearchBar from "./components/SearchBar";
import { SearchBarProvider } from "./context/SearchBarContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./app.css";

const theme = createTheme({
  typography: {
    fontFamily: '"signika",sans-serif',
  },
});

function App() {
  return (
    <SearchBarProvider>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            background: "linear-gradient(brown,blue)",
            textAlign: "center",
            margin: "0 auto",
            height: "900px",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "50px" }}>
            Weather <WbSunnyIcon fontSize="large" sx={{ color: "yellow" }} />
          </Typography>
          <SearchBar />
        </Box>
      </ThemeProvider>
    </SearchBarProvider>
  );
}

export default App;
