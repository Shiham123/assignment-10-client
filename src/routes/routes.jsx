import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../mainLayout/layout';
import ErrorPage from '../pages/errorPage';
import HomePage from '../pages/home';
import AddProduct from '../pages/addProduct';
import MyCart from '../pages/myCart';
import LoginPage from '../pages/login';
import BrandItems from '../pages/brandItems';
import RegisterPage from '../pages/register';
import ItemDetails from '../pages/itemDetails';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/addProduct', element: <AddProduct /> },
      { path: '/myCart', element: <MyCart /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/brand/:id', element: <BrandItems /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/itemDetails', element: <ItemDetails /> },
    ],
  },
]);

export default routes;
