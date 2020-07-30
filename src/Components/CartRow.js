import React from 'react';
import './CartRow.css';

import shoeimg from './../img/black.png';

export const CartRow = ({ name, color, size, price }) => {
    return (
        <div className="row">
                    <div className="col-md-6">
                        <img src={shoeimg} alt="" srcset="" />
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
                                <select class="quantity root-detail">
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option >3</option>
                                    <option>4</option>
                                    <option>5</option>
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