import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

// Asset imports
import carousel1 from '../../assets/img/carousel-1.jpg'
import carousel2 from '../../assets/img/carousel-2.jpg'
import productMenu from '../../assets/img/product-menu.jpg'
import promoMenu from '../../assets/img/promo-menu.jpg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div
                    className="carousel slide"
                    id="infoCarousel"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#infoCarousel"
                            data-slide-to="0"
                            className="active"
                        />
                        <li data-target="#infoCarousel" data-slide-to="1" />
                        {/* <li data-target="#carousel" data-slide-to="2"></li> */}
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <img
                                src={carousel1}
                                className="d-block w-100 animated zoomIn"
                                alt="LuFong"
                            />

                            <div className="carousel-caption d-none d-sm-block">
                                <h1 className="animated lightSpeedIn">
                                    Chinese Cuisine for Take Out &amp; Delivery
                                </h1>
                                <p className="animated zoomIn">
                                    Imus &amp; Macapagal Branch
                                </p>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <img
                                src={carousel2}
                                className="d-block w-100 animated zoomIn"
                                alt="LuFong"
                            />
                            <div className="carousel-caption d-none d-sm-block">
                                <h1 className="animated lightSpeedIn">
                                    Go Get the Bestsellers!
                                </h1>
                                <p className="animated zoomIn">
                                    All products are FRESHLY COOKED upon order.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#infoCarousel"
                        role="button"
                        data-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#infoCarousel"
                        role="button"
                        data-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container-fluid">
                    <div className="d-flex flex-column mb-3">
                        <div className="menu-header text-center">
                            <hr className="header-line" />
                            <h1>OUR PRODUCTS</h1>
                            <hr className="header-line" />
                        </div>

                        <div className="row">
                            <img
                                className="img-fluid w-75 m-auto pb-3"
                                src={productMenu}
                                alt="LuFong Products"
                            />
                        </div>

                        <Link className="lufong-btn m-auto" to="/products">
                            SEE ALL PRODUCTS
                        </Link>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="menu-header text-center">
                            <hr className="header-line" />
                            <h1>OUR PROMOS</h1>
                            <hr className="header-line" />
                        </div>

                        <div className="row">
                            <img
                                className="img-fluid w-75 m-auto pb-3"
                                src={promoMenu}
                                alt="LuFong Promos"
                            />
                        </div>

                        <Link className="lufong-btn m-auto" to="/promos">
                            SEE ALL PROMOS
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
