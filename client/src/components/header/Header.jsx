import { useState } from "react";
import "./header.css";
import { CgMenuRightAlt } from "react-icons/cg";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //function to get the menu styles
  const getMenuStyles = (isMenuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !isMenuOpen && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo1.png" alt="Logo" width={100} />
        </Link>
        <OutsideClickHandler onOutsideClick={() => setIsMenuOpen(false)}>
          <div style={getMenuStyles(isMenuOpen)} className="flexCenter h-menu">
            <NavLink to="/properties">Properties</NavLink>

            <a href="mailto:issamkharbache2@gmail.com">Contact us</a>
            {/* Login byutton */}
            <button className="button">Login</button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <CgMenuRightAlt size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
