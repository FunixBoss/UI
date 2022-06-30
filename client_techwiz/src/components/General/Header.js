import React, { Component } from 'react';
import * from '../../../public/assets/images/   '

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="header sticky-header">
                    <div className="container">
                    <a href="index.html" className="site-logo" title="Shopo - eCommerce Template">
                        <img src={require('../../../public/assets/images/logo.png')} alt="Logo" />
                        <span className="sr-only">Shopo</span>
                    </a>
                    <div className="search-form-container">
                        <a href="#" className="search-form-toggle" title="Toggle Search"><i className="fa fa-search" /></a>
                        <form action="#">
                        <input type="search" className="form-control" placeholder="Search" required />
                        <button type="submit" title="Search" className="btn"><i className="fa fa-search" /></button>
                        </form>
                    </div>{/* End .search-form-container */}
                    <ul className="top-links">
                        <li><a href="signin.html">Sign In</a></li>
                        <li><a href="signup.html">Sign Up</a></li>
                        <li><a href="cart.html">Cart</a></li>
                    </ul>
                    <div className="dropdown cart-dropdown">
                        <a className="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-expanded="false">
                        <span className="cart-icon">
                            <img src="{../../../public/assets/images/bag.png}" alt="Cart" />
                            <span className="cart-count">4</span>
                        </span>
                        <i className="fa fa-caret-down" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                        <p className="dropdown-cart-info">You have 2 products in your cart.</p>
                        <div className="dropdown-menu-wrapper">
                            <div className="product">
                            <figure className="product-image-container">
                                <a href="product.html" title="Product Name">
                                <img src="{../../../public/assets/images/products/small/product2.jpg}" alt="Product Image" />
                                </a>
                            </figure>
                            <div>
                                <a href="#" className="btn-delete" title="Delete product" role="button" />
                                <h4 className="product-title"><a href="product.html">Sunglasses</a></h4>
                                <div className="product-price-container">
                                <span className="product-price">$110.00</span>
                                </div>{/* End .product-price-container */}
                                <div className="product-qty">x1</div>{/* End .product-qty */}
                            </div>{/* End .product-image-container */}
                            </div>{/* End .product- */}
                            <div className="product">
                            <figure className="product-image-container">
                                <a href="product.html" title="Product Name">
                                <img src="{../../../public/assets/images/products/small/product1.jpg" alt="Product Image" />
                                </a>
                            </figure>
                            <div>
                                <a href="#" className="btn-delete" title="Delete product" role="button" />
                                <h4 className="product-title"><a href="product.html">Leather Belt</a></h4>
                                <div className="product-price-container">
                                <span className="product-price">$99.00</span>
                                </div>{/* End .product-price-container */}
                                <div className="product-qty">x1</div>{/* End .product-qty */}
                            </div>{/* End .product-image-container */}
                            </div>{/* End .product- */}
                        </div>{/* End .droopdowm-menu-wrapper */}
                        <div className="cart-dropdowm-action">
                            <div className="dropdowm-cart-total"><span>TOTAL:</span> $209.00</div>
                            <a href="checkout.html" className="btn btn-primary">Checkout</a>
                        </div>{/* End .cart-dropdown-action */}
                        </div>{/* End .dropdown-menu */}
                    </div>{/* End .cart-dropddown */}
                    <a href="#" className="sidemenu-btn" title="Menu Toggle">
                        <span />
                        <span />
                        <span />
                    </a>
                    </div>{/* End .container-fluid */}
                </header>{/* End .header */}
            </div>
        )
    }
}
