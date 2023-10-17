import { Outlet } from 'react-router-dom';
import NavbarItem from '../components/navbar';

const MainLayout = () => {
  return (
    <div>
      <NavbarItem />
      <Outlet />
    </div>
  );
};

export default MainLayout;
