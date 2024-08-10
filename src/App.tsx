import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';

import Layout from './components/Layout';

import AuthLayout from './components/auth/Layout';
import LoginWithEmail from './pages/auth/LoginWithEmail';
import CompleteProfile from './pages/auth/CompleteProfile';

import GameFreeMode from './pages/game/FreeMode';

import { AuthRoutes, HomeRoutes, GameRoutes } from './constants/route';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to={'auth'} />} />
          <Route path={AuthRoutes.ROOT} element={<AuthLayout />}>
            <Route index element={<Navigate to={AuthRoutes.GETSTARTED} />} />
            <Route path={AuthRoutes.GETSTARTED} element={<LoginWithEmail />} />
            <Route path={AuthRoutes.ONBOARD} element={<CompleteProfile />} />
          </Route>
          <Route path={HomeRoutes.ROOT} element={<></>} />
          <Route path={GameRoutes.ROOT} element={<Outlet />}>
            <Route path={GameRoutes.FREE} element={<GameFreeMode />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
