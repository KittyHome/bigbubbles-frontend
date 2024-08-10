import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import AuthLayout from './components/auth/Layout';
import LoginWithEmail from './pages/auth/LoginWithEmail';
import CompleteProfile from './pages/auth/CompleteProfile';

import { AuthRoutes } from './constants/route';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to={'auth'} />} />
        <Route path={AuthRoutes.ROOT} element={<AuthLayout />}>
          <Route index element={<Navigate to={AuthRoutes.GETSTARTED} />} />
          <Route path={AuthRoutes.GETSTARTED} element={<LoginWithEmail />} />
          <Route path={AuthRoutes.ONBOARD} element={<CompleteProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}
