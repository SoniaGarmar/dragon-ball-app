import React from 'react';
import { useNavigate } from 'react-router-dom';

function CharacterCard({ character }) {
  const navigate = useNavigate();
    if (!character || !character.id) {
    return null; 
  }

    const handleCardClick = () => {
    if (character && character.id) {
      navigate(`/character/${character.id}`);
    }
  };

  return (
    <div 
      className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg text-center cursor-pointer hover:border-orange-500 transition-colors duration-200"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyUp={(e) => e.key === 'Enter' && handleCardClick()}
    >
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
     
      <p className="text text-gray-400"><span className='font-semibold'>Ki</span>: {character.ki}</p> 
      <p className="text text-gray-400">{character.description}</p>
    </div>
  );
}

export default CharacterCard;


