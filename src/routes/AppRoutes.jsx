import { Routes, Route, Navigate } from 'react-router-dom';

import WelcomePage from '../pages/WelcomePage';
import CharactersPage from '../pages/CharactersPage';
import CharacterDetailPage from '../pages/CharacterDetailPage';
import NotFoundPage from '../pages/NotFoundPage';
import PlanetsPage from '../pages/PlanetsPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/characters" replace />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/character/:id" element={<CharacterDetailPage />} />
      <Route path="/planets" element={<PlanetsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;