import { Box } from "@mui/material";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { SearchBarContext } from "../context/SearchBarContext";
import SearchIcon from "@mui/icons-material/Search";
import { get_current_data } from "../API";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, setCurrentWeather } =
    useContext(SearchBarContext);

  const [value, setValue] = useState("");

  const fetchCurrentData = async (city: string) => {
    try {
      const response = await get_current_data(city);
      setCurrentWeather(response.data);
    } catch (error) {
      alert("Location not found");
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("store");
    if (storedData) fetchCurrentData(storedData);
    else fetchCurrentData(searchTerm);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setValue(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue("");
    localStorage.setItem("store", searchTerm);
    await fetchCurrentData(searchTerm);
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
