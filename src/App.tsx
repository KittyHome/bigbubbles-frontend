import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import AuthLayout from './components/auth/Layout';
import Signin from './pages/auth/Signin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to={'auth'} />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Navigate to={'signin'} />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </Router>
  );
}
