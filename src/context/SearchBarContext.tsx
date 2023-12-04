import { createContext, useState } from "react";

const defaultContext = {
  searchTerm: "",
  setSearchTerm: () => {},
  currentWeather: {},
  setCurrentWeather: () => {},
};

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  currentWeather: {};
  setCurrentWeather: React.Dispatch<React.SetStateAction<{}>>;
}

const SearchBarContext = createContext<SearchContextType>(defaultContext);

const SearchBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});

  const sharedObject = {
    searchTerm,
    setSearchTerm,
    currentWeather,
    setCurrentWeather,
  };

  return (
    <SearchBarContext.Provider value={sharedObject}>
      {children}
    </SearchBarContext.Provider>
  );
};

export { SearchBarContext, SearchBarProvider };
