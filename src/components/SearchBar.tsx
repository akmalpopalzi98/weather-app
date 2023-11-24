import { Box } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { SearchBarContext } from "../context/SearchBarContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchBarContext);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  console.log(searchTerm);
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
