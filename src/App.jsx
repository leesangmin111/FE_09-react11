import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./styles/App.scss";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <Navbar 
                isLoggedIn={isLoggedIn} 
                onLogout={handleLogout} 
                toggleDarkMode={toggleDarkMode} 
                isDarkMode={isDarkMode} 
            />
            <Routes>
                <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
                <Route path="/details/:id" element={<MovieDetail isDarkMode={isDarkMode} />} />
                <Route path="/login" element={<Login onLogin={handleLogin} users={users} isDarkMode={isDarkMode} />} />
                <Route path="/signup" element={<Signup setUsers={setUsers} isDarkMode={isDarkMode} />} />
            </Routes>
        </div>
    );
};

export default App;
