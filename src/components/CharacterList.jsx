import React from 'react';
import CharacterCard from './CharacterCard';

function CharacterList({ characters, isLoading, error, searchAttempted }) {
  if (isLoading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-8">{error}</p>;
  }

  if (characters.length > 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-8">
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  }
  
  if (searchAttempted) {
      return <p className="text-center text-xl mt-8">No characters found matching your criteria.</p>;
  }

  return (
    <p className="text-center text-xl mt-8">
      Type a name or ki value above to search for characters!
    </p>
  );
}

export default CharacterList;
