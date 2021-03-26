import React from 'react';

import { connect } from 'react-redux';

import { toggleMenuShow } from '../../redux/menu/menu.actions';


import { ReactComponent as NavIcon } from '../../assets/menu.svg';

import './menu-icon.styles.scss';

const MenuIcon = ({ toggleMenuShow }) => (
  <div className='menu-icon-container' onClick={toggleMenuShow}>
    <NavIcon className='menu-icon'/>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleMenuShow: () => dispatch(toggleMenuShow())
});

export default connect(
  null,
  mapDispatchToProps
  )(MenuIcon);