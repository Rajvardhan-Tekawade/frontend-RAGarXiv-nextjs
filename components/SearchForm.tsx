'use client'

import { useState } from 'react';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(query); // Submit the query
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Enter a topic to summarize"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 border-2 border-gray-300 dark:border-gray-700 rounded-lg text-black dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="mt-4 w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Summarize
      </button>
    </form>
  );
};

export default SearchForm;
