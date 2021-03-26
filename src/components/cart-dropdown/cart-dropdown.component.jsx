import React from 'react';
import { connect } from 'react-redux';


import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as RemoveButton } from '../../assets/x.svg';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch, appearance}) => (
    <div className={`cart-dropdown ${appearance}`}>
      <div className="cart-header">
        <div className="cart-title">Cart</div>
        <div className="cart-exit" tabIndex="0" onClick={() => {dispatch(toggleCartHidden());}} onKeyDown={(e) => { if (e.keyCode === 13) {dispatch(toggleCartHidden());}}}><RemoveButton /></div>
      </div>
      <div className="cart-items" tabIndex="-1">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>Go to Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));