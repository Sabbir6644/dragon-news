import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './MainLayOut/Home/Home';
import NewsDetails from './MainLayOut/NewsDetails/NewsDetails';
import Context from './MainLayOut/SharedFile/Context';
import LoginForm from './MainLayOut/LoginForm/LoginForm';
import Registration from './MainLayOut/LoginForm/Registration';
import PrivateRoute from './MainLayOut/NewsDetails/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/details/:_id",
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
  },
  {
    path: "/login",
    element: <LoginForm></LoginForm>
  },
  {
    path: "/registration",
    element: <Registration></Registration>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
   <Context>
   <RouterProvider router={router} />
   </Context>

   
  </React.StrictMode>,
)
