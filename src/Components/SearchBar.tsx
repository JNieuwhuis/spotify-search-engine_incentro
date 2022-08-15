import React, { useState } from "react";
import "../Styles/SearchBar.css";

const SearchBar = () => {
  const [input, setInput] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("input", input);
    alert("Searching!");
  };

  return (
    <div className="searchBox">
      <input
        className="inputBar"
        placeholder="Search Spotify..."
        onChange={handleInput}
      />
      <button className="searchButton" onClick={handleSearch}>
        Search!
      </button>
    </div>
  );
};

export default SearchBar;
