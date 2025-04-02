import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">Feed</Link></li>
        <li><Link to="/trending">Trending</Link></li>
        <li><Link to="/top-users">Top Users</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
