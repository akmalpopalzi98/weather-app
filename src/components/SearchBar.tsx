import { Box } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { SearchBarContext } from "../context/SearchBarContext";

const SearchBar = () => {
  const { setSearchTerm } = useContext(SearchBarContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box>
      <input
        style={{
          width: "60%",
          height: "30px",
          borderRadius: "10px",
          border: "none",
        }}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchBar;
