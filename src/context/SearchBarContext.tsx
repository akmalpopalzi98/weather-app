import { createContext, useState } from "react";

const defaultContext = {
  searchTerm: "",
  setSearchTerm: () => {},
};

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBarContext = createContext<SearchContextType>(defaultContext);

const SearchBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const sharedObject = {
    searchTerm,
    setSearchTerm,
  };

  return (
    <SearchBarContext.Provider value={sharedObject}>
      {children}
    </SearchBarContext.Provider>
  );
};

export { SearchBarContext, SearchBarProvider };
