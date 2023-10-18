import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes.jsx';
import './main.css';
import { AppProvider } from './context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={routes} />
    </AppProvider>
  </React.StrictMode>
);
