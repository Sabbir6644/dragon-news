import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../SharedFile/Context";
import pic from "/src/assets/user.png"

const Nav = () => {
  const {user, logOut, loading}= useContext(UserContext);
  // const { photoURL }= user;
     const links = <>
     <li><NavLink>Home</NavLink></li>
      <li><NavLink>About</NavLink></li>
      <li><NavLink>Career</NavLink></li>
     </>
     const handleLogOut = ()=>{
      logOut()
      .then()
      .catch()
     }
     return (

<div className=" mx-auto mt-3">
<div className="navbar flex justify-between bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu lg:hidden menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu flex gap-4 items-end menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex items-center gap-3">
    {
  loading ? null : (
    user ? (
      <img className="w-9 h-9 rounded-full" src={user?.photoURL} alt="" />
    ) : (
      <img className="w-9 h-9" src={pic} alt="" />
    )
  )
}

     {/* <img className="w-9 h-9" src="/src/assets/user.png" alt="" /> */}
    {
      user?
      <button onClick={handleLogOut} className="btn bg-blue-900 py-1 px-3 rounded-sm text-white">Sign out</button>
       : <Link to={"/login"}>
     <button className="btn bg-blue-900 py-1 px-3 rounded-sm text-white">Login</button>
     </Link>
    }
    
     
     
    </div>
  </div>
</div>
</div>
     );
};

export default Nav;