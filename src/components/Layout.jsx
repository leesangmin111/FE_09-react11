import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar"; 
import '../styles/App.scss';

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar /> 
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
