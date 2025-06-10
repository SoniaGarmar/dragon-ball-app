import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
      <p>&copy; {new Date().getFullYear()} Dragon Ball Universe. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
