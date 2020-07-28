import React, {useState, useContext} from 'react';
import {Cartcontext} from '../Cartcontext';
import './Product.css';

import shoeimg from './../img/black.png';

export const Product = ({match, onClick, count}) => {
    const [active, setActive] = useState("blue");
    const [size, setSize] = useState("9");
    const [cart, setCart] = useContext(Cartcontext);

    async function addToCart(name,active,size) {
        const details = {
            name,
            active,
            size
        };        
        setCart([details,...cart],);
        onClick(count+1);
        console.log(cart);
    }
    return (
        <div className="d-container">
            <div className="d-card">
                <div className="shoeBackground">
                    <div className="gradients">
                        <div className="gradient second" color={active}></div>
                    </div>
                    <h1 className="nike">nike</h1>
                    <img src="img/logo.png" alt="" className="logo" />
                    <a href="#" className="share"><i className="fas fa-share-alt"></i></a>
    
                    <img src={shoeimg} alt="" className="shoe show" color="blue" />
                    <img src="img/red.png" alt="" className="shoe" color="red" />
                    <img src="img/black.png" alt="" className="shoe" color="green" />
                    <img src="img/black.png" alt="" className="shoe" color="orange" />
                    <img src="img/black.png" alt="" className="shoe" color="black" />
    
                </div>
                <div className="info">
                    <div className="shoeName">
                        <div>
                            <h1 className="big">{match.params.id}</h1>
                            <span className="new">new</span>
                        </div>
                        <h3 className="small">Men's running shoes</h3>
                    </div>
                    <div className="d-description">
                        <h3 className="product-title">Product Info</h3>
                        <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                    </div>
                    <div className="color-container">
                        <h3 className="product-title">Color</h3>
                        <div className="colors">
                            <span className={`d-color ${(active === "blue") ? 'active' : ''}`} color="blue" onClick={() => setActive("blue")}></span>
                            <span className={`d-color ${(active === "red") ? 'active' : ''}`} color="red" onClick={() => setActive("red")}></span>
                            <span className={`d-color ${(active === "green") ? 'active' : ''}`} color="green" onClick={() => setActive("green")}></span>
                            <span className={`d-color ${(active === "orange") ? 'active' : ''}`} color="orange" onClick={() => setActive("orange")}></span>
                            <span className={`d-color ${(active === "black") ? 'active' : ''}`} color="black" onClick={() => setActive("black")}></span>
                        </div>
                    </div>
                    <div className="size-container">
                        <h3 className="product-title">size</h3>
                        <div className="sizes">
                            <span className={`d-size ${(size === "7") ? 'active' : ''}`} onClick={() => setSize("7")}>7</span>
                            <span className={`d-size ${(size === "8") ? 'active' : ''}`} onClick={() => setSize("8")}>8</span>
                            <span className={`d-size ${(size === "9") ? 'active' : ''}`} onClick={() => setSize("9")}>9</span>
                            <span className={`d-size ${(size === "10") ? 'active' : ''}`} onClick={() => setSize("10")}>10</span>
                            <span className={`d-size ${(size === "11") ? 'active' : ''}`} onClick={() => setSize("11")}>11</span>
                        </div>
                    </div>
                    <div className="buy-price">
                        <a className="buy" onClick={ () => addToCart(match.params.id,active,size)}><i className="ti-shopping-cart"></i>Add to card</a>
                        <div className="price">
                            <i className="fas fa-dollar-sign"></i>
                            <h1>189.99</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;