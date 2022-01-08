import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="logo" />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLine1">Hello Guest</span>
          <span className="header__optionLine2">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">&orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Your</span>
          <span className="header__optionLine2">Prime</span>
        </div>

        <div className="header__basketOption">
          <ShoppingBasket />
          <span className="header__optionLine2 header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
