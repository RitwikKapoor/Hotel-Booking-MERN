import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import useHeaderColor from "../../hooks/useHeaderColor";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import logo from "../../assets/logo.png";
import useAuthCheck from "../../hooks/useAuthCheck";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();
  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };

  const handleAddPropertyClick = () => {
    if(validateLogin()){
      setModalOpened(true)
    }
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="paddings innerWidth flexCenter h-container">
        <Link to="/">
          <img src={logo} alt="logo" width={100} />
        </Link>
        <OutsideClickHandler onOutsideClick={() => setMenuOpen(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <NavLink to="/properties">Properties</NavLink>

            {/* add property */}
            {validateLogin && <div onClick={handleAddPropertyClick}>Add Property</div>}
            <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />

            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
