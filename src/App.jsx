import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}