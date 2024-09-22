import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchUserData = async (query, page) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}&page=${page}`);
      setUsersData((prevUsers) => [...prevUsers, ...response.data.items]);
      setError(null);
    } catch (error) {
      setUsersData([]);
      setError("Looks like we cant find the user");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = buildQuery();
    fetchUserData(query, page);
  };

  const buildQuery = () => {
    let query = username ? `user:${username}` : '';
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;
    return query;
  };

  const loadMore = () => {
    setPage(page + 1);
    const query = buildQuery();
    fetchUserData(query, page + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">GitHub Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
            <input
              type="number"
              id="minRepos"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </form>

      {isLoading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {usersData.map(user => (
          <div key={user.id} className="p-4 border rounded shadow-md">
            <img src={user.avatar_url} alt={user.login} className="rounded-full w-24 h-24" />
            <h2 className="text-xl font-semibold mt-2">{user.login}</h2>
            <p className="text-gray-600">{user.location || 'Location not available'}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Profile</a>
          </div>
        ))}
      </div>

      {usersData.length > 0 && (
        <button onClick={loadMore} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
