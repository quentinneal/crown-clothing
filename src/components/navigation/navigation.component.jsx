import React from 'react';

import './navigation.styles.scss';

// React Router
import { NavLink } from "react-router-dom";

// React Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Reselect
import {selectCurrentUser} from '../../redux/user/user.selectors';

import { toggleMenuHidden } from '../../redux/menu/menu.actions';

import { ReactComponent as RemoveButton } from '../../assets/x.svg';

import { signOutStart } from '../../redux/user/user.actions';

import './navigation.styles.scss';





const Navigation = ({ currentUser, dispatch, appearance, signOutStart, toggleMenuHidden }) => {

  /*const signOutAndHideMenu = () => {
    auth.signOut();
    dispatch(toggleMenuHidden());
  }*/
  
  return (
    <nav className={`navigation ${appearance}`}>
      <div className="menu-header">
        <div className="menu-title">Menu</div>
        <div className="menu-exit" onClick={toggleMenuHidden}><RemoveButton /></div>
      </div>
      <ul>
        <li><NavLink exact to="/" onClick={toggleMenuHidden}>Home</NavLink></li>             
        <li><NavLink to="/shop" onClick={toggleMenuHidden}>Shop</NavLink></li>
        <li><NavLink to="/contact" onClick={toggleMenuHidden}>Contact</NavLink></li>
        {currentUser ? (
          <li>
            <a href="/#" onClick={signOutStart}>
              Sign Out
            </a>
          </li>
        ) : (
          <li>
            <NavLink to="/signin" onClick={toggleMenuHidden}>
              Sign In
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  )};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleMenuHidden: () => dispatch(toggleMenuHidden())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Navigation);