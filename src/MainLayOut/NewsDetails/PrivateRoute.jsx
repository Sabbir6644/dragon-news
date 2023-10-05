/* eslint-disable react/prop-types */
import { useContext } from "react";
import { UserContext } from "../SharedFile/Context";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
     const location = useLocation();
     // console.log('Location from private route', location);
     const {user, loading}= useContext(UserContext)
     if (loading) {
          return
     }
     return (
          <div>
               {user? children : <Navigate state={location.pathname} to={"/login"}></Navigate>
               }
          </div>
     );
};

export default PrivateRoute;