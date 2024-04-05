import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './assets/css/style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/Home.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import PageCategory from './pages/PageCategory.jsx';
import Special from './special/Special.jsx';
import Detail from './detail/Detail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/:category', element: <PageCategory /> },
      { path: '/:category/:id', element: <Detail /> },
    ],
  },
  { path: '/tag/special', element: <Special /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
