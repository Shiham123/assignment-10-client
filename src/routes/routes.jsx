import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../mainLayout/layout';
import ErrorPage from '../pages/errorPage';
import HomePage from '../pages/home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: '/', element: <HomePage /> }],
  },
]);

export default routes;
