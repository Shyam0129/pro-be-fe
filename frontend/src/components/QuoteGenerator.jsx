import React, { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

const dummyQuotes = [
  "The future belongs to those who believe in the beauty of their dreams.",
  "AI is not the future. It’s the present.",
  "Machine learning is the new electricity.",
  "Imagination is more important than knowledge.",
  "What you seek is seeking you.",
];

export default function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * dummyQuotes.length);
    setQuote(dummyQuotes[randomIndex]);
    setIsFavorite(false);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 max-w-xl w-full text-center">
      <p className="text-gray-800 text-lg italic mb-6 min-h-[48px] flex items-center justify-center">
        {quote ? `"${quote}"` : ""}
      </p>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={generateQuote}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Generate AI Quote
        </button>
        <button onClick={toggleFavorite} className="text-red-600 hover:scale-110 transition">
          {isFavorite ? <Heart fill="red" /> : <HeartOff />}
        </button>
      </div>
    </div>
  );
}
