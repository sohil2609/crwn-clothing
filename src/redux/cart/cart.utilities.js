export const addItemToCart = (cartItems, cartItemToAdd) => {
    let existingCartItem = null;
    cartItems = cartItems.map(cartItem => {
        if(cartItem.id === cartItemToAdd.id) {
            existingCartItem = true
            return { ...cartItem, quantity: cartItem.quantity+1}
        }
        return cartItem;
    })

    if(!existingCartItem) {
        cartItems.push({ ...cartItemToAdd, quantity: 1})
    }
    return cartItems;
}

export const clearItemToCart = (cartItems, cartItemToRemove) => {
    cartItems = cartItems.filter(cartItem => {
        if(cartItem.id !== cartItemToRemove.id) {
            return true
        }
        return false
    })
    return cartItems
}

export const decreaseItemFromCart = (cartItems, cartItemToRemove) => {
    if(cartItemToRemove.quantity <= 1) {
        cartItems = clearItemToCart(cartItems, cartItemToRemove);
        return cartItems
    }

    cartItems = cartItems.map(cartItem => {
        if(cartItem.id === cartItemToRemove.id) {
            --cartItem.quantity;
            cartItem = {...cartItem}
        }
        return cartItem
    });
    
    return cartItems;   
}