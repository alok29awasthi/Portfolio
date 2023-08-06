import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { AboutMe, Contact, Experience, Resume } from './pages';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AboutMe/>,
    },
    {
      path: "/resume",
      element: <Resume/>,
    },
    {
      path: "/experience",
      element: <Experience/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={router} />
)

