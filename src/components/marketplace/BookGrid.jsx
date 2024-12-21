import BookCard from './BookCard';

function BookGrid({ books }) {
  if (!books.length) {
    return (
      <div className="text-center text-gray-600 py-8">
        No books found. Try a different search term.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookGrid;