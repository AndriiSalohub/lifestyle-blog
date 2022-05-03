import { NavLink } from "react-router-dom";

export const NavigationLinks = () => {
  return (
    <ul className="header-list">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/hot-articles">Hot Articles</NavLink>
      </li>
      <li>
        <NavLink to="/people">People</NavLink>
      </li>
      <li>
        <NavLink to="/places">Places</NavLink>
      </li>
      <li>
        <NavLink to="/stories">Stories</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/buy-now">BUY NOW</NavLink>
      </li>
    </ul>
  );
};
