import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import RankForm from './RankForm'; // formerly `App`, rename it for clarity


function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rank" element={<RankForm />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
