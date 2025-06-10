import React from 'react';
import { useState, useEffect } from 'react';
import { searchCharacters } from '../services/api';
import useDebounce from '../hooks/useDebounce';

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [nameQuery, setNameQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const debouncedNameQuery = useDebounce(nameQuery, 500);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const results = await searchCharacters(debouncedNameQuery);
        setCharacters(results);
      } catch (err) {
        setError('Failed to fetch characters. ' + err.message);
        setCharacters([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

  }, [debouncedNameQuery]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center mb-4">Search Characters</h1>
      
      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search by name (e.g., Goku)"
          className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={nameQuery}
          onChange={(e) => setNameQuery(e.target.value)}
        />
      </div>

      {isLoading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!isLoading && !error && characters.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {characters.map(character => (
            // TODO: Add ACharacterCard component
             character.name
          ))}
        </div>
      )}
      {!isLoading && !error && characters.length === 0 && debouncedNameQuery && (
        <p className="text-center text-xl mt-8">No characters found matching "{debouncedNameQuery}".</p>
      )}
      {!isLoading && !error && characters.length === 0 && !debouncedNameQuery && (
        <p className="text-center text-xl mt-8">Type a name above to search for characters!</p>
      )}
    </div>
  );
}

export default CharactersPage;