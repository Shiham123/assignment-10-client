import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../mainLayout/layout';
import ErrorPage from '../pages/errorPage';
import HomePage from '../pages/home';
import AddProduct from '../pages/addProduct';
import MyCart from '../pages/myCart';
import LoginPage from '../pages/login';

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
    ],
  },
]);

export default routes;
