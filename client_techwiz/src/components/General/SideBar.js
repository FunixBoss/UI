import React, { Component } from "react";

export default class SideBar extends Component {
    render() {
        return (
            <>
            <aside className="col-md-3 col-md-pull-9 sidebar sidebar-shop">
                <div className="widget widget-box widget-shop-category active">
                    <h3 className="widget-title">
                        Category{" "}
                        <a href="#" className="btn-filter" role="button">
                        Filter
                        <i className="fa fa-caret-down" />
                        </a>
                    </h3>
                    <ul className="shop-category-list accordion">
                        <li>
                        <a href="category.html">Fashion</a>
                        </li>
                        <li>
                        <a href="category.html">Electronics </a>
                        </li>
                        <li>
                        <a href="category.html">Home &amp; Garden</a>
                        </li>
                        <li>
                        <a href="category.html">Sports Equipments</a>
                        </li>
                        <li>
                        <a href="category.html">Motors Products</a>
                        </li>
                    </ul>
                </div>
                <div className="widget widget-box widget-shop-filter">
                    <h3 className="widget-title">
                        Filter{" "}
                        <a href="#" className="btn-category" role="button">
                        Categories
                        <i className="fa fa-caret-down" />
                        </a>
                    </h3>
                    <div className="filter-box">
                        <h5 className="filter-label">Sort By</h5>
                        <ul className="shop-filter-list">
                        <li>
                            <a href="#">
                            <i className="fa fa-caret-right" />
                            Default
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa fa-caret-right" />
                            Popularity
                            </a>
                        </li>
                        <li className="active">
                            <a href="#">
                            <i className="fa fa-caret-right" />
                            Average Rating
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa fa-caret-right" />
                            Newness
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa fa-caret-right" />
                            Price: Low to high
                            </a>
                        </li>
                        <li>
                            <a href="#">
                            <i className="fa fa-caret-right" />
                            Price: high to Low
                            </a>
                        </li>
                        </ul>
                    </div>
                    {/* End .filter-box */}
                    <div className="filter-box">
                        <h5 className="filter-label">
                        Price{" "}
                        <span className="filter-price-text">
                            <span className="filter-price-prefix">$</span>
                            <span id="filter-price-range" />
                        </span>
                        </h5>
                        <div className="price-slider-wrapper">
                        <div id="price-slider" />
                        {/* End #price-slider */}
                        </div>
                        {/* End .price-slider-wrapper */}
                    </div>
                    {/* End .filter-box */}
                    <div className="filter-box">
                        <h5 className="filter-label">Color</h5>
                        <div className="row">
                        <div className="col-xs-6">
                            <ul className="filter-color-list">
                            <li>
                                <span
                                className="filter-color"
                                style={{ backgroundColor: "#1e73be" }}
                                />
                                <span className="filter-color-text">Blue</span>
                            </li>
                            <li>
                                <span
                                className="filter-color"
                                style={{ backgroundColor: "#c0c0c0" }}
                                />
                                <span className="filter-color-text">Gray</span>
                            </li>
                            <li>
                                <span
                                className="filter-color"
                                style={{ backgroundColor: "#dc9814" }}
                                />
                                <span className="filter-color-text">Orange</span>
                            </li>
                            </ul>
                        </div>
                        {/* End col-xs-6 */}
                        <div className="col-xs-6">
                            <ul className="filter-color-list">
                            <li>
                                <span
                                className="filter-color"
                                style={{ backgroundColor: "#736751" }}
                                />
                                <span className="filter-color-text">Brown</span>
                            </li>
                            <li>
                                <span
                                className="filter-color"
                                style={{ backgroundColor: "#05ac92" }}
                                />
                                <span className="filter-color-text">Green</span>
                            </li>
                            <li>
                                <span
                                className="filter-color"
                                style={{ backgroundColor: "#fff" }}
                                />
                                <span className="filter-color-text">White</span>
                            </li>
                            </ul>
                        </div>
                        {/* End col-xs-6 */}
                        </div>
                        {/* End row */}
                    </div>
                    {/* End .filter-box */}
                    <a href="#" className="btn btn-apply btn-block">
                        Apply Filter
                    </a>
                </div>
                <div className="widget widget-banner">
                    <div className="banner banner-image">
                        <a href="#" title="Brown Woman Shoes">
                        <img
                            src="assets/images/banners/widget-banner.png"
                            alt="Banner name"
                        />
                        </a>
                    </div>
                </div>
                <div className="widget widget-newsletter">
                    <h3 className="widget-title">Newsletter</h3>
                    <p>Enter your email address below to subscribe to my newsletter</p>
                    <form action="#">
                        <div className="form-group">
                        <img src="assets/images/icon-newsletter-email.png" alt="Email" />
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            required
                        />
                        </div>
                        {/* End .form-group */}
                        <input
                        type="submit"
                        defaultValue="subscribe now"
                        className="btn btn-block"
                        />
                    </form> 
                </div>
            </aside>
            </>
        );
    }
}
