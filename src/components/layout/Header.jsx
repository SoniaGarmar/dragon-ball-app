import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="relative bg-[url('/src/assets/dragonball-header.jpg')] bg-cover bg-center h-64 shadow-md">
      <div className="h-full flex justify-center items-center">
        <Link to="/">
          <p className="title">Dragon Ball Universe</p>
        </Link>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center bg-[#000]">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
