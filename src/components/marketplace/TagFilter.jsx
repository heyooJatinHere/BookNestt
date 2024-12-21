function TagFilter({ selectedTag, onTagSelect }) {
  const tags = [
    'All',
    'Fiction',
    'Fantasy',
    'Science',
    'History',
    'Biography',
    'Technology',
    'Business'
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag === 'All' ? '' : tag.toLowerCase())}
          className={`px-4 py-1 rounded-full ${
            selectedTag === (tag === 'All' ? '' : tag.toLowerCase())
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default TagFilter;