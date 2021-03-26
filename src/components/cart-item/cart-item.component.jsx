import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (

  <div className="cart-item">
    <div className="image-container">
      <img src={imageUrl} alt="item"/>
    </div>
    <div className="item-details">
      <div className='name'>{name}</div>
      <div className='price'>{quantity} x ${price}</div>
    </div>
  </div>
);

export default React.memo(CartItem);