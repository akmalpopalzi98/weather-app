import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import SearchBar from "./components/SearchBar";

const theme = createTheme({
  typography: {
    fontFamily: '"signika","sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "wheat",
          textAlign: "center",
          width: "700px",
          margin: "0 auto",
          height: "900px",
        }}
      >
        <Typography>Weather in</Typography>
        <SearchBar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
