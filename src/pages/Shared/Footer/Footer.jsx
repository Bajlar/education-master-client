import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 divide-y text-gray-800 relative bottom-0 left-0">
      <div className="py-6 text-sm text-center text-gray-400">
        © {currentYear} Education Master. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
