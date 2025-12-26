import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
}