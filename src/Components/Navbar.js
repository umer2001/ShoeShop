import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './Style.css';

export const Navbar = ( { productCount } ) => {
	let path = useLocation().pathname;
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
                            <li className={`nav-item ${(path == '/') ? 'active' : ''}`}>
						        <a className="nav-link">HOME <span className="sr-only">(current)</span></a>
						    </li>
                          </Link>
                          <Link to="/shop">
                            <li className={`nav-item ${(path == '/shop') ? 'active' : ''}`}>
						        <a className="nav-link">SHOP</a>
						    </li>
                          </Link>
                          <Link>
                            <li className="nav-item">
						        <a className="nav-link disabled">Disabled</a>
						    </li>
                          </Link>
					  </ul>
					</div>
				</nav>
			</div>

			<ul className="p-2">
				<li><a href="" className="main-color">MEN</a></li>
				<li><a href="">WOMEN</a></li>
			</ul>

			<ul className="nav-items">
				<Link to="/cart">
				<li>
					<span className="ti-shopping-cart main-color"></span>({productCount})
				</li>
				</Link>
				<li><a href=""><span className="ti-user main-color"></span></a></li>
			</ul>
		</header>
    )
}

export default Navbar;