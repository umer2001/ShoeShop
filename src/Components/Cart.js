import React, {useState, useContext} from 'react';
import {Cartcontext} from '../Cartcontext';

export const Cart = () => {
    const [cart, setCart] = useContext(Cartcontext);
    return (
        <div>
            {cart.map((item) => {
                return <li>{item.name}</li>
            })}
        </div>
        
    )
}

export default Cart;