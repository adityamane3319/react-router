import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="p-10p border-t-2 border-black text-center">

      <p>My App</p>

      <div>
        <Link to="/home"> Home </Link>
         |  
        <Link to="/login"> Login </Link>
         | 
        <Link to="/signup"> Signup </Link>
      </div>

      <p>© 2026 All Rights Reserved.</p>

    </footer>
  );
}

export default Footer;