import React from 'react';

import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import { ReactComponent as LeftArrow } from '../../assets/chevron-left.svg';
import { ReactComponent as RightArrow } from '../../assets/chevron-right.svg';
import { ReactComponent as RemoveButton } from '../../assets/x.svg';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
<div className="checkout-item">
  <div className="image-container checkout-element">
    <img src={imageUrl} alt="item"/>
  </div>
    <div className="name checkout-element">
      {name}
    </div>
    <div className="quantity checkout-element">
      <div className="arrow" tabIndex='0' onClick={() => removeItem(cartItem)} onKeyDown={(e) => { if (e.keyCode === 13) {removeItem(cartItem)}}}><LeftArrow /></div>
        <div className="value">{quantity}</div>
      <div className="arrow" tabIndex='0' onClick={() => addItem(cartItem)} onKeyDown={(e) => { if (e.keyCode === 13) {addItem(cartItem)}}}><RightArrow /></div>
    </div>
    <div className="price checkout-element">
      ${price}
    </div>
    <div className="remove-button checkout-element">
      <div className="x-button" tabIndex='0' onClick={() => clearItem(cartItem)} onKeyDown={(e) => { if (e.keyCode === 13) {clearItem(cartItem)}}}>
        <RemoveButton />
      </div>
    </div>
</div>
















  /*<div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"/>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
    <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
      <span className="value">{quantity}</span>
    <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
    </span>
    <span className="price">{price}</span>
    <div className="remove-button" onClick={() => clearItem(cartItem)}>
      &#10005;
    </div>
  </div>*/
)};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null, 
  mapDispatchToProps
)(CheckoutItem);