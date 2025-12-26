import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import RegisterForm from "./components/SubmitForm";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register-form" element={<RegisterForm />} />
    </Routes>
  );
}