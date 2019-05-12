import React, { Component } from 'react'
import './style.css'

import soloMeals1 from '../../assets/img/solo-meals-1.jpg'

export default class Products extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="menu-group" id="solo-meals">
                    <div className="d-flex justify-content-center">
                        <div className="menu-header text-center d-inline-block">
                            <hr className="header-line" />
                            <h1>SOLO MEALS</h1>
                            <hr className="header-line" />
                        </div>
                    </div>
                    <div className="menu-list row justify-content-center">
                        <div className="col-10 col-sm-6 col-md-3">
                            <img
                                className="w-100"
                                src={soloMeals1}
                                alt="Shanghai Fried Rice, 3 pcs. Fried
                                        Chicken, 1 pc. Ube Pao"
                            />
                            <table className="menu-item-table">
                                <tbody>
                                    <tr>
                                        <td className="menu-item-code">SM1</td>
                                        <td className="menu-item-name">
                                            Shanghai Fried Rice, 3 pcs. Fried
                                            Chicken, 1 pc. Ube Pao
                                        </td>
                                        <td className="menu-item-price">150</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
