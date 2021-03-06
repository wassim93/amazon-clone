import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../provider/StateProvider";
import { auth } from "../../config/firebaseServices";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    console.log(user);
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user ? "/login" : "/"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLine1">
              Hello{!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLine2">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">&orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__basketOption">
            <ShoppingBasket />
            <span className="header__optionLine2 header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
