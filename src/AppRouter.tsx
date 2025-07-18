import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { CodeRequestForm } from './CodeRequestForm';
import { CodeVerificationForm } from './CodeVerificationForm';
import { SignupForm } from './SignupForm';
import { RankForm } from './RankForm';
import { ProtectedRoute } from './ProtectedRoute';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/code-request" element={<CodeRequestForm />} />
        <Route path="/code-verification" element={<CodeVerificationForm />} />

        <Route
          element={
            <ProtectedRoute tokenKey="codeToken" redirectTo="/code-request" />
          }
        >
          <Route path="/signup" element={<SignupForm />} />
        </Route>

        <Route
          element={<ProtectedRoute tokenKey="token" redirectTo="/signup" />}
        >
          <Route path="/rank" element={<RankForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
