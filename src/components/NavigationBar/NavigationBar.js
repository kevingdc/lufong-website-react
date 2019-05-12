import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

// Asset imports
import logo from '../../assets/img/lufong-imus-macapagal-logo.png'

export default class NavigationBar extends Component {
    render() {
        return (
            <nav className="nav navbar-expand-lg fixed-top">
                <NavLink className="navbar-brand" to="/" exact>
                    <img src={logo} alt="LuFong" />
                </NavLink>
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
                            <NavLink className="nav-link" to="/" exact>
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-link"
                                id="navbarDropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                                to="/products"
                            >
                                PRODUCTS
                            </NavLink>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <NavLink
                                    className="dropdown-item"
                                    to="/products/solo-meals"
                                >
                                    SOLO MEALS
                                </NavLink>
                                <NavLink
                                    className="dropdown-item"
                                    to="/products/pancit"
                                >
                                    PANCIT
                                </NavLink>
                                <NavLink
                                    className="dropdown-item"
                                    to="/products/soup-and-noodles"
                                >
                                    SOUP AND NOODLES
                                </NavLink>
                                <NavLink
                                    className="dropdown-item"
                                    to="/products/chicken"
                                >
                                    CHICKEN
                                </NavLink>
                                <NavLink
                                    className="dropdown-item"
                                    to="/products/beef"
                                >
                                    BEEF
                                </NavLink>
                                <NavLink
                                    className="dropdown-item"
                                    to="/products/pork"
                                >
                                    PORK
                                </NavLink>
                                <NavLink
                                    className="dropdown-item"
                                    to="/products/fish"
                                >
                                    FISH
                                </NavLink>
                                <NavLink
                                    className="dropdown-item"
                                    to="/products/vegetables"
                                >
                                    VEGETABLES
                                </NavLink>
                                <NavLink
                                    className="dropdown-item"
                                    to="/products/rice"
                                >
                                    RICE
                                </NavLink>
                                <NavLink
                                    className="dropdown-item"
                                    to="/products/dessert"
                                >
                                    DESSERT
                                </NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/promos">
                                PROMOS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/locations">
                                LOCATIONS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about-us">
                                ABOUT US
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
