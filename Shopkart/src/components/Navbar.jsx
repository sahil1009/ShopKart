import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
export function Navbar() {
    return (
        <>
            {/* Top Shipping Bar */}
            <div className="top-bar">
                <div className="container-fluid">
                    <span className="new-badge">NEW</span>
                    Free shipping on orders above ₹499 | Easy 7-day returns
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/* Logo */}
                    <a className="navbar-brand" href="/">
                        <img src="/images/logo.png" alt="shopkart-logo" className="shopkart-logo" />
                    </a>

                    <div className="dropdown category-dropdown">
                        <button className="category-btn dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">  All Categories </button>

                        <ul className="dropdown-menu">
                            <li> <a className="dropdown-item" href="#"> Electronics </a> </li>
                            <li> <a className="dropdown-item" href="#"> Fashion </a> </li>
                            <li> <a className="dropdown-item" href="#"> Home & Kitchen </a> </li>
                            <li> <a className="dropdown-item" href="#"> Beauty & Personal Care </a> </li>
                            <li> <a className="dropdown-item" href="#"> Sports & Fitness </a> </li>
                            <li> <a className="dropdown-item" href="#"> Books & Stationery </a> </li>
                        </ul>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#shopKartNavbar" >
                        <span className="navbar-toggler-icon"></span> </button>

                    {/* Navigation */}
                    <div className="collapse navbar-collapse" id="shopKartNavbar">
                        <ul className="navbar-nav main-nav">

                            <li className="nav-item"> <NavLink className="nav-link active" to="/"> Home
                            </NavLink> </li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/products"> Products</NavLink>
                            </li>
                            <li className="nav-item"> <a className="nav-link" href="#trending"> Trending </a> </li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/aboutUs"> About Us </NavLink> </li>
                            <li className="nav-item"> <NavLink className="nav-link" to="/contact"> Contact </NavLink>  </li>

                        </ul>

                        {/* Search */}
                        <div className="search-box">
                            <input type="text" placeholder="Search for products..." />
                            <button className="search-btn">
                                <img src="/icons/search-icon.png" alt="Search" />
                            </button>
                        </div>

                        {/* Icons */}
                         <div className="nav-actions">
                            <NavLink to="/cart" className="cart-wrapper">

                                <img src="/icons/cart-icon.png" alt="Cart" className="nav-icon" />
                                <span className="cart-count"> 3 </span>

                            </NavLink>
                        </div>

                    </div>

                    {/* user profile here */}
                     <div className="dropdown account-dropdown">
                        <button className="account-btn" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false" aria-label="My Account">
                            <img src="/icons/profile-icon-2.png" alt="My Account" className="profile-icon" />
                        </button>
                        <ul className="dropdown-menu account-menu">
                            <li> <Link className="dropdown-item" to="/login">Login</Link> </li>
                            <li>
                                <Link className="dropdown-item" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}



