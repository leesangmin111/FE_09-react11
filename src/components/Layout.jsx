import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; 
import '../styles/App.scss';

const Layout = ({ isLoggedIn, onLogout, toggleDarkMode, isDarkMode }) => {
  return (
    <div>
      <header>
        <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} /> 
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
