import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div className="relative h-screen w-screen bg-dark-background">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
