import React, {useState, useContext} from 'react';
import {Cartcontext} from '../Cartcontext';
import './Style.css';

export const Home = ( ) => {
	const name = "Nike Runners Men";
	const price = 25000;
    const [active, setActive] = useState("blue");
    const [size, setSize] = useState("9");
	const [cart, setCart] = useContext(Cartcontext);
	const shoec = "https://www.img-load.ml/img/home-"+active+".png";

	function addToCart(name,active,size,price,quantity=1) {
        const details = {
            name,
            active,
            size,
            price,
            quantity
        };        
		setCart([details,...cart],);
	}
	
    return (
        <div className="row content">
			<div className="col-md-3 title">
				<h1>{name}</h1>

				<div className="main-price">
					<h3>${price}</h3>
				</div>
			</div>

			<div className=" col-md-5 image">
				<img src={shoec} alt="" />
			</div>

			<div className="col-md-4 description">
				<p>HHV | Sneakers, Streetwear & more | Berlin | Since 2002 | 24h Shipping | Trusted Shops 5* 30 Days Right Of Return. Shipment Within 24hrs. HHV | Sneakers, Streetwear & more | Berlin | Since 2002 | 24h Shipping | Trusted Shops 5* 30 Days Right Of Return. Shipment Within 24h.</p>

				<div className="variants">
					<div className={`var-circle yellow ${(active === "yellow") ? 'selected' : ''}`}>
						<div className="circle" onClick={() => setActive("yellow")}></div>
					</div>
					<div className={`var-circle red ${(active === "red") ? 'selected' : ''}`}>
						<div className="circle" onClick={() => setActive("red")}></div>
					</div>
					<div className={`var-circle blue ${(active === "blue") ? 'selected' : ''}`}>
						<div className="circle" onClick={() => setActive("blue")}></div>
					</div>
					<div className={`var-circle black ${(active === "black") ? 'selected' : ''}`}>
						<div className="circle" onClick={() => setActive("black")}></div>
					</div>
				</div>
				<div className="variants">
					<div className={`var-circle gray ${(size === "7") ? 'selected' : ''}`}>
						<div className="circle" onClick={() => setSize("7")}><small>7</small></div>
					</div>
					<div className={`var-circle gray ${(size === "8") ? 'selected' : ''}`}>
						<div className="circle" onClick={() => setSize("8")}><small>8</small></div>
					</div>
					<div className={`var-circle gray ${(size === "9") ? 'selected' : ''}`}>
						<div className="circle" onClick={() => setSize("9")}><small>9</small></div>
					</div>
					<div className={`var-circle gray ${(size === "10") ? 'selected' : ''}`}>
						<div className="circle" onClick={() => setSize("10")}><small>10</small></div>
					</div>
				</div>

				<div className="button">
					<button onClick={ () => addToCart(name,active,size,price)}><span className="ti-shopping-cart"></span> Add to Cart</button>
				</div>
			</div>
		</div>
    )
}

export default Home;