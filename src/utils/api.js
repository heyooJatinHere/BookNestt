import axios from 'axios';

// Base URL for Google Books API
const GOOGLE_BOOKS_API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
// Your API Key
const GOOGLE_BOOKS_API_KEY = 'AIzaSyADZ5LhjfAoxjDz1299tYS3ge-q9TfTdi4';

export const searchBooks = async (query, tag = '') => {
  try {
    // Add subject tag to query if provided
    const searchQuery = tag ? `${query}+subject:${tag}` : query;

    // Construct the full API request URL
    const url = `${GOOGLE_BOOKS_API_BASE_URL}?q=${searchQuery}&maxResults=20&key=${GOOGLE_BOOKS_API_KEY}`;
    
    // Make the API request
    const response = await axios.get(url);
    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
