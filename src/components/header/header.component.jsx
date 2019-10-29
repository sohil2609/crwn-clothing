import React from 'react';
import "./header.styles.scss";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg'

export const Header = () => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link to="/shop" className="option">
                Shop
            </Link>
            <Link to="/contact" className="option">
                Contact
            </Link>
        </div>
    </div>
)