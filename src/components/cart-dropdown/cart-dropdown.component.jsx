import React from 'react';

import './cart-dropdown.styles.scss';
import { CustomButton } from '../custom-button/custom-button.component'


const CartDropdown = (props) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        </div>
        <CustomButton onChange={props.changeHandler}>Checkout</CustomButton>
    </div>
);

export default CartDropdown;