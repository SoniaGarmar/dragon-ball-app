import React from 'react';

function Navbar() {
  return (
    <nav>
      <div>
        <h2>Dragon Ball Universe</h2>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/characters">Characters</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;