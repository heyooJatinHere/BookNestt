import { useState } from 'react';
import SearchBar from './SearchBar';
import TagFilter from './TagFilter';
import BookGrid from './BookGrid';
import { searchBooks } from '../../utils/api';

function Marketplace() {
  const [books, setBooks] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const results = await searchBooks(query, selectedTag);
    setBooks(results);
    setLoading(false);
  };

  const handleTagSelect = async (tag) => {
    setSelectedTag(tag);
    if (books.length > 0) {
      setLoading(true);
      const results = await searchBooks(books[0]?.volumeInfo?.title || '', tag);
      setBooks(results);
      setLoading(false);
    }
  };

  return (
    <div id="marketplace" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary mb-8">
          Book Marketplace
        </h2>
        <SearchBar onSearch={handleSearch} />
        <TagFilter selectedTag={selectedTag} onTagSelect={handleTagSelect} />
        
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          </div>
        ) : (
          <BookGrid books={books} />
        )}
      </div>
    </div>
  );
}

export default Marketplace;