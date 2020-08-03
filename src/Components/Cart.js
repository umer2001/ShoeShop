import React, {useState, useContext} from 'react';
import {Cartcontext} from '../Cartcontext';
import CartRow from './CartRow';

export const Cart = () => {
    const [cart, setCart] = useContext(Cartcontext);
    var subTotal = 0;
    var shipping = cart.length*0.5;
    cart.map((item) => {
        subTotal += item.price;
    })
    return (
        <div className="row">
            <div className="col-md-8">
                {cart.map((item) => {
                    return <CartRow name={item.name} color={item.active} size={item.size} price={item.price} />
                })}
            </div>
            <div className="col-md-4">
                <h1>Summary</h1>
                <div className="row">
                    <div className="col-8">
                        <h3>Subtotal</h3>
                        <h3>Shipping</h3>
                        <h3>Tax</h3>
                        <hr />
                        <h3>Total</h3>
                        <hr />
                    </div>
                    <div className="col-4">
                        <h3>${subTotal}</h3>
                        <h3>${shipping}</h3>
                        <h3>$2</h3>
                        <hr />
                        <h3>${shipping+2+subTotal}</h3>
                        <hr />
                    </div>
                </div>
                <div className="button checkout">
                    <button type="button" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {setCart([]);shipping=subTotal=0}}>Confirm Order</button>
                </div>
            </div>
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title main-color" id="exampleModalLongTitle">Order Received</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h2><span className="ti-check-box"></span> Thankyou for your Order</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Cart;