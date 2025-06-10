import { Routes, Route } from 'react-router-dom';

import WelcomePage from '../pages/WelcomePage';
import CharactersPage from '../pages/CharactersPage';
import CharacterDetailPage from '../pages/CharacterDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/character/:id" element={<CharacterDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;