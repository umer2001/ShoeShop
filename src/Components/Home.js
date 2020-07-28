import React from 'react';
import './Style.css';
import shoe from '../img/hiclipart.com(1).png';

export const Home = (props) => {
    return (
        <div className="row content">
			<div className="col-md-3 title">
				<h1>Nike Runners Men</h1>

				<div className="price">
					<h3>$25,000</h3>
				</div>
			</div>

			<div className=" col-md-5 image">
				<img src={shoe} alt="" />
			</div>

			<div className="col-md-4 description">
				<p>HHV | Sneakers, Streetwear & more | Berlin | Since 2002 | 24h Shipping | Trusted Shops 5* 30 Days Right Of Return. Shipment Within 24hrs. HHV | Sneakers, Streetwear & more | Berlin | Since 2002 | 24h Shipping | Trusted Shops 5* 30 Days Right Of Return. Shipment Within 24h.</p>

				<div className="variants">
					<div className="var-circle selected">
						<div className="circle"></div>
					</div>
					<div className="var-circle">
						<div className="circle red"></div>
					</div>
					<div className="var-circle">
						<div className="circle blue"></div>
					</div>
					<div className="var-circle">
						<div className="circle pink"></div>
					</div>
				</div>

				<div className="button">
					<button onClick={(event) => props.onClick(props.count+1)}><span className="ti-shopping-cart"></span> Add to Cart</button>
					<button className="favorite"><span className="ti-heart"></span> Favorite</button>
				</div>
			</div>
		</div>
    )
}

export default Home;