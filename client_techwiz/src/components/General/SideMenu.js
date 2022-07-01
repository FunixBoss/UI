import React, { Component } from 'react'

export default class SideMenu extends Component {
    render() {
        return (
            <>
            <aside className="sidemenu">
                <div className="sidemenu-wrapper">
                    <div className="sidemenu-header">
                    <a href="index.html" className="sidemenu-logo">
                        <img src="assets/images/logo.png" alt="logo" />
                    </a>
                    </div>{/* End .sidemenu-header */}
                    <ul className="metismenu">
                    <li><a href="index.html">Home</a></li>
                    <li>
                        <a href="#" aria-expanded="false">Pages <span className="sidemenu-icon" /></a>
                        <ul aria-expanded="false" className="collapse">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" aria-expanded="false">Shop <span className="sidemenu-icon" /></a>
                        <ul aria-expanded="false" className="collapse">
                        <li><a href="category.html">Category</a></li>
                        <li><a href="product.html">Product</a></li>
                        <li><a href="cart.html">Shopping Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                        <li><a href="signin.html">Sign In</a></li>
                        <li><a href="signup.html">Sign Up</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>{/* End .sidemenu-wrapper */}
            </aside>{/* End .sidemenu */}   
            </>
        )
    }
}
