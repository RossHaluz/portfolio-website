"use client";
import { useState } from "react";
import MenuButton from "./MenuButton";
import MenuList from "./MenuList";
import NavbarLogo from "./NavbarLogo";
import NavbarNavigagion from "./NavbarNavigagion";
import NavbarSocials from "./NavbarSocials";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-full flex items-center justify-between px-4 md:px-8 lg:px-15 text-xl">
      {/* Links  */}
      <NavbarNavigagion />

      {/* Logo  */}
      <div className="md:hidden lg:flex lg:w-1/3 lg:justify-center">
        <NavbarLogo />
      </div>

      {/* Socials  */}
      <NavbarSocials />

      {/* Responsive menu  */}
      <div className="md:hidden">
        {/* Menu button  */}
        <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
        {isOpen && <MenuList />}
      </div>
    </header>
  );
};

export default Navbar;
