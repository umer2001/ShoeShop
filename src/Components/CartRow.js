import React from 'react';
import './CartRow.css';

import shoeimg from './../img/black.png';

export const CartRow = ({ name, color, size, price }) => {
    return (
        <div className="row">
                    <div className="col-md-6">
                        <img src={shoeimg} className="cart-shoe" alt="" srcSet="" />
                    </div>
                    <div className="col-md-6">
                        <h1>{name}</h1>
                        <div className="row mt-5 mb-5">
                            <div className="col-md-6">
                                <h3 className="root-detail">COLOR : </h3>
                                <h5 className="root-detail">{color}</h5>
                            </div>
                            <div className="col-md-6">
                                <h3 className="root-detail">SIZE : </h3>
                                <h5 className="root-detail">{size}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="root-detail">Quantity : </h3>
                                <select className="quantity root-detail">
                                    <option defaultValue>1</option>
                                    <option value>2</option>
                                    <option value>3</option>
                                    <option value>4</option>
                                    <option value>5</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <h3 className="root-detail">PRICE : </h3>
                                <h5 className="root-detail">${price}</h5>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default CartRow;