import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; 
import '../styles/App.scss';

const Layout = ({ isLoggedIn, onLogout }) => {
  return (
    <div>
      <header>
        <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} /> 
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
