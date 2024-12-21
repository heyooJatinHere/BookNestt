function BookCard({ book }) {
  const { volumeInfo } = book;
  const thumbnail = volumeInfo.imageLinks?.thumbnail || '/placeholder-book.png';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={thumbnail}
        alt={volumeInfo.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{volumeInfo.title}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {volumeInfo.authors?.join(', ') || 'Unknown Author'}
        </p>
        <p className="text-sm text-gray-500 line-clamp-3">
          {volumeInfo.description || 'No description available'}
        </p>
      </div>
    </div>
  );
}

export default BookCard;