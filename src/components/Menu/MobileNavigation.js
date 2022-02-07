import { NavigationLinks } from "./NavigationLinks";
import { RiMenuFill } from "react-icons/ri";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

export const MobileNavigation = () => {
  const [open, setOpen] = useState(true);
  const hamburgerIcon = (
    <RiMenuFill
      className="header-hamburger"
      size={25}
      color="#c09043"
      onClick={() => setOpen(!open)}
    />
  );
  const openIcon = (
    <RiMenu3Fill
      className="header-hamburger"
      size={25}
      color="#c09043"
      onClick={() => setOpen(!open)}
    />
  );
  return (
    <nav className="header-mobile-menu">
      {open ? openIcon : hamburgerIcon}
      {open && <NavigationLinks />}
    </nav>
  );
};
