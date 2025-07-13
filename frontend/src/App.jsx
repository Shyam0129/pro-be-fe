// src/App.jsx
import React from "react";
import QuoteGenerator from "./components/QuoteGenerator";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <QuoteGenerator />
    </div>
  );
}
