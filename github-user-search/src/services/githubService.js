import axios from 'axios';

export const searchUsers = async (query, page = 1) => {
  const endpoint = `https://api.github.com/search/users?q=${query}&page=${page}`;
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
