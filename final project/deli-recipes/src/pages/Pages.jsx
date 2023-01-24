import React from "react";
import Category from "../components/Category";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Search from "../components/Search";
import Searched from "./Searched";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipe from "./Recipe";
import Navbar from "../components/Navbar";

function Pages() {
  return (
    <Router>
      <Navbar />
      <Search />
      <Category />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default Pages;
