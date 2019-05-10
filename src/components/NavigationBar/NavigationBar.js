import React, { Component } from 'react'
import './style.css'

// Assets imports
import logo from '../../assets/img/lufong-imus-macapagal-logo.png'

export default class NavigationBar extends Component {
    render() {
        return (
            <nav className="nav navbar-expand-lg fixed-top">
                <a className="navbar-brand" href="index.html">
                    <img src={logo} />
                </a>
                <button
                    className="navbar-toggler ml-auto"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                HOME
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link"
                                href="javascript:void(0)"
                                id="navbarDropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                PRODUCTS
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <a
                                    className="dropdown-item"
                                    href="products/pancit.html"
                                >
                                    PANCIT
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="products/soup-and-noodles.html"
                                >
                                    SOUP AND NOODLES
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="products/chicken.html"
                                >
                                    CHICKEN
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="products/beef.html"
                                >
                                    BEEF
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="products/pork.html"
                                >
                                    PORK
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="products/fish.html"
                                >
                                    FISH
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="products/vegetables.html"
                                >
                                    VEGETABLES
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="products/rice.html"
                                >
                                    RICE
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="products/dessert.html"
                                >
                                    DESSERT
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="promos.html">
                                PROMOS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="locations.html">
                                LOCATIONS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about-us.html">
                                ABOUT US
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
