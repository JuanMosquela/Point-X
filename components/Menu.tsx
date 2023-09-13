import React from "react";
import { menuLinks } from "../constants";
import Link from "next/link";

const Menu = () => {
  return (
    <nav className="fixed bg-green z-60 w-full">
      <ul>
        {menuLinks.map((link) => (
          <li className="text-white">{link.text}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
