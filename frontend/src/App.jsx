import React, { useState } from 'react';
import QuoteCard from './components/QuoteCard';

const dummyQuotes = [
  {
    quote: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds"
  },
  {
    quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  }
];

function App() {
  const [currentQuote, setCurrentQuote] = useState(dummyQuotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * dummyQuotes.length);
    setCurrentQuote(dummyQuotes[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 space-y-6">
      <QuoteCard quote={currentQuote.quote} author={currentQuote.author} />
      
      <button
        onClick={generateQuote}
        className="px-6 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition"
      >
        Generate
      </button>
    </div>
  );
}

export default App;
