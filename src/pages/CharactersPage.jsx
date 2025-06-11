import React from 'react';
import { useState } from 'react';
import { searchCharacters } from '../services/api';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [nameQuery, setNameQuery] = useState('');
  const [kiMin, setKiMin] = useState('');
  const [kiMax, setKiMax] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClear = () => {
    setNameQuery('');
    setKiMin('');
    setKiMax('');
    setCharacters([]);
    setError(null);
  };

  const handleSearch = async () => {
    if (!nameQuery.trim() && !kiMin.trim() && !kiMax.trim()) {
      setCharacters([]);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const results = await searchCharacters(nameQuery, kiMin, kiMax);
      setCharacters(results);
    } catch (err) {
      setError('Failed to fetch characters. ' + err.message);
      setCharacters([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center mb-4">Search Characters</h1>
      
      <div className="mb-8 max-w-md mx-auto">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Search by name (e.g., Goku)"
            className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Min ki"
              className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={kiMin}
              onChange={(e) => setKiMin(e.target.value)}
            />
            <input
              type="text"
              placeholder="Max ki"
              className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={kiMax}
              onChange={(e) => setKiMax(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleSearch}
            className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
          <button
            onClick={handleClear}
            className="w-full px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Clear
          </button>
        </div>
      </div>

      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!isLoading && !error && characters.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.map(character => (
            // TODO: Add ACharacterCard component
             character.name + "-" + character.ki + "------"
          ))}
        </div>
      )}
      {!isLoading && !error && characters.length === 0 && (nameQuery.trim() || kiMin.trim() || kiMax.trim()) && 
        <p className="text-center text-xl mt-8">No characters found matching your search.</p>
      }
      {!isLoading && !error && characters.length === 0 && !nameQuery.trim() && !kiMin.trim() && !kiMax.trim() &&
        <p className="text-center text-xl mt-8">Type a name or ki value above to search for characters!</p>
      }
    </div>
  );
}

export default CharactersPage;