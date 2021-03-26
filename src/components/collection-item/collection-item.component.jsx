import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { ReactComponent as ImageIcon } from '../../assets/image.svg';
import { ReactComponent as AddCartIcon } from '../../assets/shopping-cart.svg';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const {name, price, imageUrl} = item;
    return (
    <div className="collection-item" tabIndex='0'>
        <div className='image' style={{ backgroundImage: `url(${imageUrl})`}}>
            <div className="collection-info" tabIndex='-1'>
                <div className="fullimage-addtocart">
                    <div className="fullimage" tabIndex='0'><ImageIcon className='image-icon'/></div>
                    <div className="addtocart" tabIndex='0' onClick={() => addItem(item)} onKeyDown={(e) => { if (e.keyCode === 13) {addItem(item)}}}><AddCartIcon className='add-cart-icon'/></div>
                </div>
                <div className="name-price">
                    <div className="name">{name}</div>
                    <div className="price">${price}</div>
                </div>
            </div>
        </div>
    </div>  
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(
    null,
    mapDispatchToProps
    )(CollectionItem);