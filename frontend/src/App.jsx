// src/App.jsx
import React from "react";
import QuoteGenerator from "./components/QuoteGenerator";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <QuoteGenerator />
      </div>
    </div>
  );
}