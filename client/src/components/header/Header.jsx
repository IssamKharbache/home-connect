import { useState } from "react";
import "./header.css";
import { CgMenuRightAlt } from "react-icons/cg";
import OutsideClickHandler from "react-outside-click-handler";

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
        <img src="./logo1.png" alt="Logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setIsMenuOpen(false)}>
          <div style={getMenuStyles(isMenuOpen)} className="flexCenter h-menu">
            <a href="">Properties</a>
            <a href="">Our Value</a>
            <a href="">Contact us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
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
