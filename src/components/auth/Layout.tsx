import { Outlet } from 'react-router-dom';

import SwirlCanvas from '@/utils/SwirlCanvas';

const AuthLayout: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-dark-background">
      <div className="container relative h-screen w-screen">
        <Outlet />
      </div>
      <SwirlCanvas />
    </div>
  );
};

export default AuthLayout;
