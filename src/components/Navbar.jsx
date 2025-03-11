import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/App.scss'; 

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">OZ무비</Link>
      <div className="nav-content">
        <input
          type="text"
          className="search-input"
          placeholder="영화 제목 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>검색</button>
      </div>
    </nav>
  );
};

export default Navbar;
