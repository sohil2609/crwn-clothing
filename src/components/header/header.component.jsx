import React from 'react';
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utilities';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';


const Header = ({currentUser, hidden, toggle}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                Shop
            </OptionLink>
            <OptionLink to="/contact">
                Contact
            </OptionLink>
            {
                currentUser ? 
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    Sign Out
                </OptionLink> :
                <OptionLink to="/signin">Sign In</OptionLink> 
            }
            <CartIcon onClick={() => toggle()}/> 
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);