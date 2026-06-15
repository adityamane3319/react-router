import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between p-3 border-b border-black">

      <div><Link to="/">My App</Link></div>

      <div>
        <NavLink to="/home" className={({ isActive }) =>isActive ? "font-bold text-blue-600" : ""}>
        Home
        </NavLink>
      </div>

      <div className="flex gap-4">
        <NavLink to="/login" className={({ isActive }) =>isActive ? "font-bold text-blue-600" : ""}>
        LogIn
        </NavLink>

        <NavLink to="/signup" className={({ isActive }) =>isActive ? "font-bold text-blue-600" : ""}>
        SignUp
        </NavLink>
      </div>

    </header>
  );
}

export default Header;