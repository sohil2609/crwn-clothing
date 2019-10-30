import React from 'react';
import "./collection-item.styles.scss";
import { CustomButton } from '../custom-button/custom-button.component'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
 
const CollectionItem = ({name, price, imageUrl, id, addItem}) => (
    <div className="collection-item">
        <div className="item-img" style={{
            backgroundImage: `url(${imageUrl})`
        }}>
        </div>
        <div className="item-description">
            <span className="product-name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton inverted onClick={() => addItem({id, name, price, imageUrl}) }>Add To Cart</CustomButton>
    </div>
)


const mapDispatchToProps = (dispatch) => ({
    addItem: (cartItem) => dispatch(addItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CollectionItem)

