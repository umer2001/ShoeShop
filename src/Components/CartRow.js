import React, {useContext} from 'react';
import {Cartcontext} from '../Cartcontext';
import './CartRow.css';

export const CartRow = ({ index }) => {
    const [cart, setCart] = useContext(Cartcontext);
    var name = cart[index].name;
    var color = cart[index].active;
    var size = cart[index].size;
    var quantity = cart[index].quantity;
    var price = cart[index].price;
    var image = cart[index].image;
    
    function updateQty(num, index) {
        var cpyCart = [...cart];
        var cpyCartItem = {...cpyCart[index]};
        cpyCartItem.quantity = num;
        cpyCart[index] = cpyCartItem;
        setCart(cpyCart);
    }
    return (
        <div className="row">
                    <div className="col-md-6">
                        <img src={image} className="cart-shoe" alt="" srcSet="" />
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
                                <select defaultValue={quantity} onChange={(e) => updateQty(e.target.value, index)} className="quantity root-detail">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
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