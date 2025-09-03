import { Link } from "react-router-dom";

import type { MenuItem } from "../../Types/Navbar/menu-bar.type";
import profile_logo from "../../../assets/profile.jpg";
import "./Navbar.css";

const Navbar = () => {
  const menuBar: MenuItem[] = [
    { label: "Home", link: "/" },
    { label: "About me", link: "/about" },
    { label: "Projects", link: "/projects" },
    { label: "Resume", link: "/resume" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={profile_logo} alt="" />
        <span>Argeem</span>
      </div>
      <ul className="menu-bar">
        {menuBar.map((item) => (
          <li key={item.label}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
