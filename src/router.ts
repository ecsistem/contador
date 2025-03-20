import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import React from 'react';

export const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(App),
  },
  // Add more routes as needed:
  // {
  //   path: '/about',
  //   element: <About />,
  // },
]);