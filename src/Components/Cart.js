import React, {useContext} from 'react';
import {Cartcontext} from '../Cartcontext';
import CartRow from './CartRow';

import EmptyCart from '../img/empty_cart.svg';

export const Cart = () => {
    const [cart, setCart] = useContext(Cartcontext);
    var subTotal = 0;
    var shipping = cart.length*0.5;
    cart.map((item) => {
        subTotal += item.price*item.quantity;
        return subTotal;
    })
    return (
        <div className="row">
            {(cart.length) ? 
            <>
                <div className="col-md-8">
                    {cart.map((item, index) => {
                        return <CartRow index={index} key={index} />
                    })}
                </div>
                <div className="col-md-4">
                    <h1 className="main-color">Summary</h1>
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
                            <h3>${(cart.length > 0) ? '2' : '0'}</h3>
                            <hr />
                            <h3>${(cart.length > 0) ? shipping+2+subTotal : '0'}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="button checkout">
                        <button type="button" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {setCart([]);shipping=subTotal=0}}>Confirm Order</button>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
            </> : 
            <div className="position-absolute w-100 text-center" style={{top: "30%"}}>
                <img src={EmptyCart} className="" alt="empty cart" style={{width: "360px"}} />
                <h1 className="main-color mt-2">Your Cart is empty</h1>
            </div>
            }
            
        </div>
        
    )
}

export default Cart;