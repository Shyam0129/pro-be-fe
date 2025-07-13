import React, { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

const dummyQuotes = [
  "The future belongs to those who believe in the beauty of their dreams.",
  "AI is not the future. It’s the present.",
  "Machine learning is the new electricity.",
  "Imagination is more important than knowledge.",
  "What you seek is seeking you.",
];

function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * dummyQuotes.length);
    setQuote(dummyQuotes[randomIndex]);
    setIsFavorite(false);
  };

  const toggleFavorite = () => {
    if (!isFavorite && quote) {
      setFavorites((prev) => [...prev, quote]);
    }
    setIsFavorite(!isFavorite);
  };

  return (
        <div className="max-w-xl mx-auto bg-gradient-to-br from-white to-blue-100 border border-indigo-300 rounded-2xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">

      <p className="text-xl text-gray-800 italic border-l-4 border-indigo-500 pl-4 mb-6 min-h-[48px] flex items-center justify-center">
        {quote ? `"${quote}"` : "Click the button to generate a quote!"}
      </p>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={generateQuote}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Generate AI Quote
        </button>
        <button
          onClick={toggleFavorite}
          className="text-red-600 hover:scale-110 transition"
          title="Toggle Favorite"
        >
          {isFavorite ? <Heart fill="red" /> : <HeartOff />}
        </button>
      </div>
      {/* Favorite Quotes List */}
      {favorites.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">Favorite Quotes</h3>
          <ul className="list-disc list-inside text-gray-700">
            {favorites.map((fav, idx) => (
              <li key={idx} className="mb-1">{fav}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <QuoteGenerator />
    </div>
  );
}