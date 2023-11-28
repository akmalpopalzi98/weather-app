import { Box } from "@mui/material";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const { setSearchTerm } = useContext(SearchBarContext);
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <i
        style={{
          backgroundColor: "white",
          width: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <SearchIcon />
      </i>
      <input
        style={{
          width: "40%",
          height: "35px",
          border: "none",
          fontSize: "15px",
          textAlign: "center",
        }}
        placeholder="Search"
        onChange={handleChange}
        value={value}
      />
    </Box>
  );
};

export default SearchBar;
