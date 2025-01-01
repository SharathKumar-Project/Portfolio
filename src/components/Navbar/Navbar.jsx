import React from "react";
import { GiBarbedCoil } from "react-icons/gi";
import Social_media from "./Social_media";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <a href="#" rel="noopener noreferrer">
          <GiBarbedCoil className="text-4xl" />
        </a>
      </div>

      <div>
        <Social_media />
      </div>
    </nav>
  );
};

export default Navbar;
