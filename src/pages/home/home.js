import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

// Component imports
import ProductPoster from '../../components/ProductPoster'
import PromoPoster from '../../components/PromoPoster'

// Asset imports
import carousel1 from '../../assets/img/carousel-1.jpg'
import carousel2 from '../../assets/img/carousel-2.jpg'
import braisedBeefPoster from '../../assets/img/braised-beef-poster.jpg'
import chineseFriedChickenPoster from '../../assets/img/chinese-fried-chicken-poster.jpg'
import lechonKawaliPoster from '../../assets/img/lechon-kawali-poster.jpg'
import lumpiangShanghaiPoster from '../../assets/img/lumpiang-shanghai-poster.jpg'
import sulitSarap1Poster from '../../assets/img/sulit-sarap-1-poster.jpg'
import sulitSarap2Poster from '../../assets/img/sulit-sarap-2-poster.jpg'
import sulitSarap3Poster from '../../assets/img/sulit-sarap-3-poster.jpg'

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
                            <h1>POPULAR PRODUCTS</h1>
                            <hr className="header-line" />
                        </div>

                        <div className="row">
                            <ProductPoster
                                img={braisedBeefPoster}
                                name="Lufong Braised Beef"
                            />
                            <ProductPoster
                                img={chineseFriedChickenPoster}
                                name="Lufong Chinese Fried Chicken"
                            />
                            <ProductPoster
                                img={lechonKawaliPoster}
                                name="Lufong Lechon Kawali"
                            />
                            <ProductPoster
                                img={lumpiangShanghaiPoster}
                                name="Lufong Lumpiang Shanghai"
                            />
                        </div>

                        <Link className="lufong-btn m-auto" to="/products">
                            SEE ALL PRODUCTS
                        </Link>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="menu-header text-center">
                            <hr className="header-line" />
                            <h1>POPULAR PROMOS</h1>
                            <hr className="header-line" />
                        </div>

                        <div className="row">
                            <PromoPoster
                                img={sulitSarap1Poster}
                                name="Lufong Sulit Sarap Promo 1"
                            />
                            <PromoPoster
                                img={sulitSarap2Poster}
                                name="Lufong Sulit Sarap Promo 2"
                            />
                            <PromoPoster
                                img={sulitSarap3Poster}
                                name="Lufong Sulit Sarap Promo 3"
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
