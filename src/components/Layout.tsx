import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-dark-background">
      <Outlet />
    </div>
  );
};

export default Layout;
