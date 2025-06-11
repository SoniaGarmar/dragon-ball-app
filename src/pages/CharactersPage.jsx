import React, { useState } from 'react';
import api from '../services/api';
import SearchForm from '../components/SearchForm';
import CharacterList from '../components/CharacterList';

function CharactersPage() {
  const [name, setName] = useState('');
  const [kiMin, setKiMin] = useState('');
  const [kiMax, setKiMax] = useState('');
  const [kiMinUnit, setKiMinUnit] = useState('');
  const [kiMaxUnit, setKiMaxUnit] = useState('');
  const [characters, setCharacters] = useState([]);
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

  const handleSearch = async () => {
    const finalName = name.trim();
    const finalKiMin = kiMin.trim();
    const finalKiMax = kiMax.trim();

    if (!finalName && !finalKiMin && !finalKiMax) {
      setError('Please enter a name or a Ki range to search.');
      setCharacters([]);
      setSearchAttempted(true);
      return;
    }

    setIsLoading(true);
    setError(null);
    setSearchAttempted(true);

    try {
      const params = {};
      if (finalName) params.name = finalName;
      
      const kiMinToSearch = finalKiMin && kiMinUnit ? `${finalKiMin} ${kiMinUnit}` : finalKiMin;
      const kiMaxToSearch = finalKiMax && kiMaxUnit ? `${finalKiMax} ${kiMaxUnit}` : finalKiMax;

      if (kiMinToSearch) params.minKi = kiMinToSearch;
      if (kiMaxToSearch) params.maxKi = kiMaxToSearch;

      const response = await api.searchCharacters(params);
      setCharacters(response);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching characters.');
      setCharacters([]);
    }
    setIsLoading(false);
  };

  const handleClear = () => {
    setName('');
    setKiMin('');
    setKiMax('');
    setKiMinUnit('');
    setKiMaxUnit('');
    setCharacters([]);
    setError(null);
    setSearchAttempted(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center mb-4">Search Characters</h1>
      <p className="text-center text-gray-600 mb-8">Enter a name and/or ki value to search for characters.</p>

      <div className="mb-8">
        <SearchForm
          name={name}
          kiMin={kiMin}
          kiMax={kiMax}
          kiMinUnit={kiMinUnit}
          kiMaxUnit={kiMaxUnit}
          kiUnitOptions={kiUnitOptions}
          onNameChange={(e) => setName(e.target.value)}
          onKiMinChange={(e) => setKiMin(e.target.value)}
          onKiMaxChange={(e) => setKiMax(e.target.value)}
          onKiMinUnitChange={(e) => setKiMinUnit(e.target.value)}
          onKiMaxUnitChange={(e) => setKiMaxUnit(e.target.value)}
          handleSearch={handleSearch}
          handleClear={handleClear}
          isLoading={isLoading}
        />
      </div>

      <CharacterList
        characters={characters}
        isLoading={isLoading}
        error={error}
        searchAttempted={searchAttempted}
      />
    </div>
  );
}

export default CharactersPage;