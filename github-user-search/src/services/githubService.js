import axios from 'axios';

export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = username ? `user:${username}` : '';
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const endpoint = `https://api.github.com/search/users?q=${query}&page=${page}`;

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
