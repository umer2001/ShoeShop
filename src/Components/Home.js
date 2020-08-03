import React, {useState, useContext} from 'react';
import {Cartcontext} from '../Cartcontext';
import './Style.css';
import shoe from '../img/hiclipart.com(1).png';

export const Home = ({onClick, count}) => {
	const name = "Nike Runners Men";
	const price = 25000;
    const [active, setActive] = useState("blue");
    const [size, setSize] = useState("9");
    const [cart, setCart] = useContext(Cartcontext);

	function addToCart(name,active,size,price) {
        const details = {
            name,
            active,
            size,
            price
        };        
        setCart([details,...cart],);
        onClick(count+1);
	}
	
    return (
        <div className="row content">
			<div className="col-md-3 title">
				<h1>{name}</h1>

				<div className="price">
					<h3>${price}</h3>
				</div>
			</div>

			<div className=" col-md-5 image">
				<img src={shoe} alt="" />
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
					<div className={`var-circle pink ${(active === "pink") ? 'selected' : ''}`}>
						<div className="circle" onClick={() => setActive("pink")}></div>
					</div>
				</div>

				<div className="button">
					<button onClick={ () => addToCart(name,active,size,price)}><span className="ti-shopping-cart"></span> Add to Cart</button>
					<button className="favorite"><span className="ti-heart"></span> Favorite</button>
				</div>
			</div>
		</div>
    )
}

export default Home;