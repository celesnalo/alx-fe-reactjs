import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async (username) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError(null);
    } catch (error) {
      setUserData(null);
      if (error.response && error.response.status === 404) {
        setError("Looks like we cant find the user");
      } else {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      fetchUserData(username);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">GitHub Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </form>
      {isLoading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {userData && (
        <div className="mt-4">
          <img src={userData.avatar_url} alt={userData.login} className="rounded-full w-24 h-24" />
          <h2 className="text-2xl font-semibold">{userData.login}</h2>
          <p className="text-gray-600">{userData.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
