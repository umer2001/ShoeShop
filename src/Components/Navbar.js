import React, {useContext} from 'react';
import {Cartcontext} from '../Cartcontext';
import {Link, useLocation} from 'react-router-dom';
import './Style.css';

export const Navbar = ( ) => {
	let path = useLocation().pathname;
	const [cart] = useContext(Cartcontext);
    return (
        <header className="d-flex justify-content-between header">
			<div className="pl-4 menu-toggle">
				<nav className=" navbar-dark">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
					  <span className="ti-menu"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					  <ul className="navbar-nav mr-auto mt-2 mt-lg-0 p-2">
                          <Link to="/">
                            <li className={`nav-item nav-link ${(path === '/') ? 'active' : ''}`}>
						        HOME
						    </li>
                          </Link>
                          <Link to="/shop">
                            <li className={`nav-item nav-link ${(path === '/shop') ? 'active' : ''}`}>
						        SHOP
						    </li>
                          </Link>
					  </ul>
					</div>
				</nav>
			</div>

			<ul className="p-2">
				<li>
					<Link to="/" className="main-color">MEN</Link>
				</li>
				<li>
					<Link to="/" className="main-color">WOMEN</Link>
				</li>
			</ul>

			<ul className="nav-items pt-2">
				<Link to="/cart">
				<li>
					<span className="ti-shopping-cart main-color"></span>({cart.length})
				</li>
				</Link>
				<li>
				<Link to="#" className="main-color"><span className="ti-user main-color"></span></Link>
				</li>
			</ul>
		</header>
    )
}

export default Navbar;