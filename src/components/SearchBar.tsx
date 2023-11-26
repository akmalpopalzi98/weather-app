import { Box } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const { setSearchTerm } = useContext(SearchBarContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <input
        style={{
          width: "40%",
          height: "40px",
          border: "none",
          fontSize: "15px",
        }}
        onChange={handleChange}
      />
      <button style={{ width: "40px" }}>
        <SearchIcon />
      </button>
    </Box>
  );
};

export default SearchBar;
