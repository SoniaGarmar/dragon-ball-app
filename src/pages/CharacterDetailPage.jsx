import React from 'react';
import { useNavigate } from 'react-router-dom';

function CharacterDetailPage() {
  const navigate = useNavigate();
  return (
    <div className='text-center mt-8'>
      <h1>Character Detail</h1>
      <p>Coming soon...</p>

      <button 
        onClick={() => navigate('/characters')}
        className="w-[300px] px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-blue-300"
      >
        Back to Characters
      </button>
  </div>
  );
}

export default CharacterDetailPage;