import { Outlet } from 'react-router-dom';

import SwirlCanvas from '@/utils/SwirlCanvas';

const AuthLayout: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-dark-background">
      <div className="container relative h-screen w-screen">
        <div className="absolute right-16 top-1/2 z-50 w-full max-w-[400px] -translate-y-1/2 rounded-[32px] border-1 border-primary-border/30 bg-primary-background/20 px-10 py-16 backdrop-blur-lg">
          <Outlet />
        </div>
      </div>
      <SwirlCanvas />
    </div>
  );
};

export default AuthLayout;
