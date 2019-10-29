import React from 'react';
import "./collection-item.styles.scss"

export const CollectionItem = ({name, price, imageUrl}) => (
    <div className="collection-item">
        <div className="item-img" style={{
            backgroundImage: `url(${imageUrl})`
        }}>
        </div>
        <div className="item-description">
            <span className="product-name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
)