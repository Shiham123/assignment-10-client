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
import PrivateRoute from './privateRoute';
import UpdateItem from '../pages/updateItems';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/addProduct',
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: '/myCart',
        element: (
          <PrivateRoute>
            <MyCart />
          </PrivateRoute>
        ),
      },
      { path: '/login', element: <LoginPage /> },
      { path: '/brand/:name', element: <BrandItems /> },
      { path: '/register', element: <RegisterPage /> },
      {
        path: '/itemDetails/:id',
        element: (
          <PrivateRoute>
            <ItemDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/updateItem',
        element: (
          <PrivateRoute>
            <UpdateItem />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
