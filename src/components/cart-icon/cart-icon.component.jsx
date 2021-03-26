import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { toggleCartShow } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss';

const CartIcon = ({ dispatch, itemCount }) => (
  <div className='cart-icon' tabIndex="0" onClick={() => {dispatch(toggleCartShow());}} onKeyDown={(e) => { if (e.keyCode === 13) {dispatch(toggleCartShow());}}}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemCount}</span>
  </div>
);



const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps
  )(CartIcon);