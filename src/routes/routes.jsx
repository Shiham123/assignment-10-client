import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../mainLayout/layout';
import ErrorPage from '../pages/errorPage';
import HomePage from '../pages/home';
import AddProduct from '../pages/addProduct';
import MyCart from '../pages/myCart';
import LoginPage from '../pages/login';

import MicrosoftPage from '../pages/brand page/microsoft';
import GooglePage from '../pages/brand page/google';
import LgPage from '../pages/brand page/lg';
import SonyPage from '../pages/brand page/sony';
import SamsungPage from '../pages/brand page/samsung';
import ApplePage from '../pages/brand page/apple';

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

      { path: '/microsoft', element: <MicrosoftPage /> },
      { path: '/google', element: <GooglePage /> },
      { path: '/lg', element: <LgPage /> },
      { path: '/sony', element: <SonyPage /> },
      { path: '/samsung', element: <SamsungPage /> },
      { path: '/apple', element: <ApplePage /> },
    ],
  },
]);

export default routes;
