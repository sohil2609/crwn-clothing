import React from 'react'
import "./menu-item.styles.scss"

export const MenuItem = ({title, imageUrl, size}) => (
    <div className={`menu-item ${size}`} >
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}>
        </div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="sub-title">Shop Now</span>
        </div>
    </div>
) 