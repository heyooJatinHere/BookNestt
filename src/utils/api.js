import axios from 'axios';

const GOOGLE_BOOKS_API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const GOOGLE_BOOKS_API_KEY = 'AIzaSyADZ5LhjfAoxjDz1299tYS3ge-q9TfTdi4';

export const searchBooks = async (query, tag = '') => {
  try {
    // Format query to include tag (if provided)
    const searchQuery = tag ? `${query}+subject:${tag}` : query;

    // Make the API call with correct sorting and search query
    const response = await axios.get(`${GOOGLE_BOOKS_API_BASE_URL}?q=${searchQuery}&maxResults=20&orderBy=newest&key=${GOOGLE_BOOKS_API_KEY}`);
    
    // Check if there are results
    if (!response.data.items) {
      return [];
    }

    // Optional: sort results by rating for "trending" effect
    const sortedBooks = response.data.items?.sort((a, b) => {
      const ratingA = a.volumeInfo?.averageRating || 0;
      const ratingB = b.volumeInfo?.averageRating || 0;
      return ratingB - ratingA; // Sort by highest rating
    });

    return sortedBooks || [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
