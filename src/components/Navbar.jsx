import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const styleHamburger = () => (
    open ? { 
      display: "flex", 
      gap: "4px", 
      flexDirection: "column",
      width: "100%",
      backgroundColor: "black"
    } : {display: "none", margin: 0, padding: 0}
  )

  const handleToggle = () => {
    setNavbar(!navbar);
    setOpen(!open);
  }

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home"
    },
    {
      id: 2,
      path: "/about",
      text: "About"
    }
  ];

  return (
    <nav className="d-flex justify-content-center m-0">
      <ul style={styleHamburger()} >
        {links.map(link => (
          <li key={link.id} className="nav p-2">
            <NavLink to={link.path} className="text-decoration-none"> 
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <button className="btn position-absolute end-0 d-fixed" onClick={handleToggle}> { navbar ? <AiOutlineClose/> : <GiHamburgerMenu/> } </button>
    </nav>
  );
}

export default Navbar;
