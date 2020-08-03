import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';
import shoe from '../img/imageedit_1_6582031182.png';

export const Card = ( { name, image } ) => {
    return (
        
            <div className="col-lg-4 col-md-6 col-sm-5 container">
                <Link to={'shop/'+name}>
                    <div className="card">
                        <div className="imgbox">
                            <img src={shoe} alt={name} srcset="" />
                        </div>
                        <div className="contentbox">
                            <h2>{name}</h2>
                            <div className="size">
                                <h3>Size :</h3>
                                <span>7</span>
                                <span>8</span>
                                <span>9</span>
                                <span>10</span>
                            </div>

                            <div className="color">
                                <h3>Color :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p>Buy Now</p>
                        </div>
                    </div>
                </Link>
            </div>
    )
}

export default Card;