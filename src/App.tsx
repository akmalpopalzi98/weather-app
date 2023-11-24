import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import SearchBar from "./components/SearchBar";
import { SearchBarProvider } from "./context/SearchBarContext";

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
            width: "700px",
            margin: "0 auto",
            height: "900px",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "50px" }}>
            Weather in
          </Typography>
          <SearchBar />
        </Box>
      </ThemeProvider>
    </SearchBarProvider>
  );
}

export default App;
