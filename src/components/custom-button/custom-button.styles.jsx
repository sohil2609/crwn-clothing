import styled, { css } from 'styled-components';

const BasicStyles = css`
  border: none;
  color: white;
  background-color: black;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`


const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
        background-color: black;
        color: white;
        border: 1px solid white;
    }
`

const GoogleSignInStyle = css`
    background-color: #4285f4;
    color: #fff;
    border: none;
    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

const AddToCartButton = css`
    background-color: #4285f4;
    color: #fff;
    border: none;
    &:hover {
        background-color: #357ae8;
        border: none;
    }
`

const getButtonStyle = (props) => {
    if(props.isGoogleSignin) {
        return GoogleSignInStyle
    }

    return props.inverted ? InvertedButtonStyles : BasicStyles;
}

const getAddToCartButton = (props) => {
    if(props.isAddToCard) {
        return AddToCartButton
    }
}

export const CustomButtonContainer = styled.button`
     min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    justify-content: center;
    ${getButtonStyle}  
    ${getAddToCartButton}
`