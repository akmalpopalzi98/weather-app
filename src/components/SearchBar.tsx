import { Box } from "@mui/material";
import { ChangeEvent, FormEvent, useContext, useEffect } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import SearchIcon from "@mui/icons-material/Search";
import { get_data } from "../API";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchBarContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await get_data(searchTerm);
  //     console.log(response.data);
  //   };
  //   fetchData();
  // }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(searchTerm);
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
        value={searchTerm}
      />
    </Box>
  );
};

export default SearchBar;
