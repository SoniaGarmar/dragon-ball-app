import React from 'react';

function SearchForm({
  name,
  kiMin,
  kiMax,
  kiMinUnit,
  kiMaxUnit,
  kiUnitOptions,
  onNameChange,
  onKiMinChange,
  onKiMaxChange,
  onKiMinUnitChange,
  onKiMaxUnitChange,
  handleSearch,
  handleClear,
  isLoading,
}) {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Character Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={onNameChange}
            placeholder="e.g., Goku"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="minKi" className="block text-sm font-medium text-gray-700 mb-1">
            Min Ki
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              id="minKi"
              value={kiMin}
              onChange={onKiMinChange}
              placeholder="e.g., 1000"
              className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
            />
            <select
              value={kiMinUnit}
              onChange={onKiMinUnitChange}
              className="w-1/3 px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {kiUnitOptions.map(option => (
                <option key={`min-${option.value}`} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="maxKi" className="block text-sm font-medium text-gray-700 mb-1">
            Max Ki
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              id="maxKi"
              value={kiMax}
              onChange={onKiMaxChange}
              placeholder="e.g., 9000"
              className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
            />
            <select
              value={kiMaxUnit}
              onChange={onKiMaxUnitChange}
              className="w-1/3 px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {kiUnitOptions.map(option => (
                <option key={`max-${option.value}`} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col md:flex-row md:justify-center gap-4">
        <button
          onClick={handleSearch}
          disabled={isLoading}
          className="w-full md:w-[200px] px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-blue-300"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
        <button
          onClick={handleClear}
          className="w-full md:w-[200px] px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
