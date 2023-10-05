import { NavLink } from "react-router-dom";


const Catagory = ({data}) => {

     return (
          <div>
              <NavLink>{data.name}</NavLink> 
          </div>
     );
};

export default Catagory;