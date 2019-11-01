import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, addItem, decreaseItemFromCart } from '../../redux/cart/cart.action';

const CheckoutItem = ({cartItem, dispatch}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={cartItem.imageUrl} alt={cartItem.name} />
        </div>
        <span className="name">{cartItem.name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => dispatch(decreaseItemFromCart(cartItem))}>&#10094;</div>
            <span>{cartItem.quantity}</span>   
            <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
        </span>
        <span className="price">{cartItem.price}</span>
        <span className="remove-button" onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10005;</span>
    </div>
)

 

export default connect()(CheckoutItem)