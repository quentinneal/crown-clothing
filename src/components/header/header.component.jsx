import React from "react";

// React Router
import { NavLink } from "react-router-dom";

// React Redux
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';



import CartIcon from '../cart-icon/cart-icon.component';
import MenuIcon from '../menu-icon/menu-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import Navigation from '../navigation/navigation.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectMenuHidden} from '../../redux/menu/menu.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as Logo } from "../../assets/crown.svg";




import "./header.styles.scss";



const Header = ({ currentUser, toggleCartHidden, hidden, menuHidden }) => (
  <header className="header">
    <div className="logo-greeting">
      <figure className="logo-container">
        <NavLink className="logo-link" to="/">
          <Logo className="logo" />
        </NavLink>
      </figure>
      {currentUser ? (
          <div className="greeting">Welcome {currentUser.displayName.split(' ')[0]}!</div>
        ) : (
          null
        )}
    </div>
    <div className="navigation-shopping">
      <MenuIcon />
      {/*menuHidden ? null : <div className="menu-overlay" onClick={toggleMenuHidden} />*/}
      {menuHidden ? <Navigation appearance='menu-closed'/> : <Navigation appearance='menu-open'/>}

      
      
      <CartIcon />
      {hidden ? null : <div className="cart-overlay" onClick={toggleCartHidden} />}
      {hidden ? <CartDropdown appearance='closed'/> : <CartDropdown appearance='open'/>}
    </div>
  </header>
);

  const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  menuHidden: selectMenuHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);