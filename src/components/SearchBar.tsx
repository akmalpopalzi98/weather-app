import { Box } from "@mui/material";

const SearchBar = () => {
  return (
    <Box>
      <input
        style={{
          width: "60%",
          height: "30px",
          borderRadius: "20px",
          border: "none",
        }}
      />
    </Box>
  );
};

export default SearchBar;
