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