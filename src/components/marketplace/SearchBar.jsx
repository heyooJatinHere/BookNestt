import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-opacity-90"
        >
          <FaSearch /> Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;