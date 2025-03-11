import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import Home from "./pages/Home"; 
import MovieDetail from "./pages/MovieDetail"; 
import "./styles/App.scss"; 
const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} /> 
          <Route path="details/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
