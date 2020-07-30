import React, {useState, useContext} from 'react';
import {Cartcontext} from '../Cartcontext';
import CartRow from './CartRow';

export const Cart = () => {
    const [cart, setCart] = useContext(Cartcontext);
    return (
        <div className="row">
            <div className="col-md-8">
                {cart.map((item) => {
                    return <CartRow name={item.name} color={item.active} size={item.size} price={item.price} />
                })}
            </div>
            <div className="col-md-4">
                <h1>Summary</h1>
                <h3>Subtotal</h3>
                <h3>Shipping</h3>
                <h3>Tax</h3>
                <hr />
                <h3>Total</h3>
                <hr />
            </div>
        </div>
        
    )
}

export default Cart;