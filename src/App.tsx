import { createTheme, ThemeProvider } from "@mui/material";
import { SearchBarProvider } from "./context/SearchBarContext";
import MainPage from "./pages/MainPage";

const theme = createTheme({
  typography: {
    fontFamily: '"signika",sans-serif',
  },
});

function App() {
  return (
    <SearchBarProvider>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
    </SearchBarProvider>
  );
}

export default App;
