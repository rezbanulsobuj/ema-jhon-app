import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const { cart } = props
    console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping;
    }
    const tax = (total * .1).toFixed(2);
    const grantTotal = +(total) + +(tax) + +shipping;
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected items: {quantity}</p>
            <p>Total PRice : ${total}</p>
            <p>Total Shiping :${shipping}</p>
            <p>Tax :${tax} </p>
            <h5>Grand total : ${grantTotal}</h5>
        </div>
    );
};

export default Cart;