import React from 'react';

function CharacterCard({ character }) {
  if (!character) {
    return null; 
  }

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg text-center">
      <img 
        src={character.image} 
        alt={character.name} 
        className="w-32 h-32 object-contain rounded-full mx-auto mb-4 border-2 border-orange-500"
        onError={(e) => { 
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/150?text=No+Image'; 
        }}
      />
      <h3 className="text-xl font-semibold text-orange-400 mb-2">{character.name}</h3>
     
      <p className="text-sm text-gray-400">Ki: {character.ki}</p> 
      <p className="text-sm text-gray-400">{character.description}</p>
    </div>
  );
}

export default CharacterCard;


