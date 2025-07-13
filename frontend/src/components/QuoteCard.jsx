import React from 'react';

const QuoteCard = ({ quote, author }) => {
  return (
    <div className="max-w-xl mx-auto bg-gradient-to-br from-white to-blue-100 border border-indigo-300 rounded-2xl shadow-lg p-8 transform transition-transform duration-300 hover:scale-105">
      <p className="text-xl text-gray-800 italic border-l-4 border-indigo-500 pl-4 mb-6">
        “{quote}”
      </p>
      <div className="flex justify-end">
        <p className="text-base text-indigo-600 font-semibold">— {author}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
