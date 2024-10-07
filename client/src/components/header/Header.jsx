import { useState } from "react";
import "./header.css";
import { CgMenuRightAlt } from "react-icons/cg";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../profilemenu/ProfileMenu";
import AddPropertyModal from "../modals/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck";
import { IoCloseOutline } from "react-icons/io5";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const { validateLogin } = useAuthCheck();

  //function to get the menu styles
  const getMenuStyles = (isMenuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !isMenuOpen && "-100%" };
    }
  };

  //function to handle add property click
  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpen(true);
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="../logo1.png" alt="Logo" width={100} />
        </Link>
        <OutsideClickHandler onOutsideClick={() => setIsMenuOpen(false)}>
          <div style={getMenuStyles(isMenuOpen)} className="flexCenter h-menu">
            <NavLink to="/properties">Properties</NavLink>

            <a href="mailto:issamkharbache2@gmail.com">Contact us</a>
            {/* add property  */}
            <div onClick={handleAddPropertyClick} className="">
              Add Property
            </div>
            <AddPropertyModal opened={modalOpen} setOpened={setModalOpen} />
            {/* Login byutton */}
            {!isAuthenticated ? (
              <button onClick={loginWithRedirect} className="button">
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </OutsideClickHandler>
        {isMenuOpen ? (
          <div className="menu-icon" onClick={() => setIsMenuOpen(false)}>
            <IoCloseOutline size={30} />
          </div>
        ) : (
          <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
            <CgMenuRightAlt size={30} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
