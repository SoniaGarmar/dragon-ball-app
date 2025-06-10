import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const activeLinkStyle = {
    textDecoration: 'underline',
    color: 'var(--color-primary)',
  };

  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/characters" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>
            Characters
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;