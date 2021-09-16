import React, { useState } from "react";
import "../Styles/SearchBar.css";

const SearchBar = () => {
  const [input, setInput] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("input", input);
  };

  return (
    <div className="searchBox">
      <button className="searchButton" onClick={handleSearch}>
        Search!
      </button>
      <input
        className="inputBar"
        placeholder="Search Spotify..."
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchBar;
