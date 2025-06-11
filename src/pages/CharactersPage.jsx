import React from 'react';
import { useState } from 'react';
import { searchCharacters } from '../services/api';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [nameQuery, setNameQuery] = useState('');
  const [kiMin, setKiMin] = useState('');
  const [kiMax, setKiMax] = useState('');
  const [kiMinUnit, setKiMinUnit] = useState(''); 
  const [kiMaxUnit, setKiMaxUnit] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const kiUnitOptions = [
    { label: 'None', value: '' },
    { label: 'Thousand', value: 'thousand' },
    { label: 'Million', value: 'million' },
    { label: 'Billion', value: 'billion' },
    { label: 'Trillion', value: 'trillion' },
    { label: 'Quadrillion', value: 'quadrillion' },
    { label: 'Quintillion', value: 'quintillion' },
    { label: 'Sextillion', value: 'sextillion' },
    { label: 'Septillion', value: 'septillion' },
  ];

  const handleClear = () => {
    setNameQuery('');
    setKiMin('');
    setKiMax('');
    setKiMinUnit('');
    setKiMaxUnit('');
    setCharacters([]);
    setError(null);
    setSearchAttempted(false);
  };

  const handleSearch = async () => {
    setSearchAttempted(true);
    setIsLoading(true);
    setError(null);

    const finalNameQuery = nameQuery.trim();
    const finalKiMin = kiMin.trim();
    const finalKiMax = kiMax.trim();

    if (!finalNameQuery && !finalKiMin && !finalKiMax) {
      setCharacters([]);
      setError('Please enter a name or Ki value to search.');
      setIsLoading(false);
      return;
    }

    try {
      const kiMinToSearch = kiMin.trim() && kiMinUnit ? `${kiMin.trim()} ${kiMinUnit}` : kiMin.trim();
      const kiMaxToSearch = kiMax.trim() && kiMaxUnit ? `${kiMax.trim()} ${kiMaxUnit}` : kiMax.trim();
      const response = await searchCharacters(nameQuery, kiMinToSearch, kiMaxToSearch);
      if (response && response.length > 0) {
        setCharacters(response);
      } else {
        setCharacters([]);
        if (!error) { 
            setError('No characters found matching your search.');
        }
      }
    } catch (err) {
      console.error('Failed to fetch characters:', err);
      setError('Failed to fetch characters. Please try again.');
      setCharacters([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center mb-4">Search Characters</h1>
      <p>Enter a name and/or ki value to search for characters.</p>
      
      <div className="mb-8 max-w-md mx-auto">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Search by name (e.g. Goku)"
            className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
          />
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 flex gap-2">
              <input
                type="number"
                placeholder="Min Ki (number)"
                className="w-2/3 px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={kiMin}
                onChange={(e) => setKiMin(e.target.value)}
                min="0"
              />
              <select
                value={kiMinUnit}
                onChange={(e) => setKiMinUnit(e.target.value)}
                className="w-1/3 px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {kiUnitOptions.map(option => (
                  <option key={`min-${option.value}`} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 flex gap-2">
              <input
                type="number"
                placeholder="Max Ki (number)"
                className="w-2/3 px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={kiMax}
                onChange={(e) => setKiMax(e.target.value)}
                min="0"
              />
              <select
                value={kiMaxUnit}
                onChange={(e) => setKiMaxUnit(e.target.value)}
                className="w-1/3 px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {kiUnitOptions.map(option => (
                  <option key={`max-${option.value}`} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
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
      {!isLoading && !error && !searchAttempted && characters.length === 0 &&
        <p className="text-center text-xl mt-8">Type a name or ki value above to search for characters!</p>
      }
    </div>
  );
}

export default CharactersPage;