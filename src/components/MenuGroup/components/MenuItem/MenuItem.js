import React, { Component } from 'react'
import './style.css'

export default class MenuItem extends Component {
    render() {
        const { img, code, name, price } = this.props

        return (
            <div className="col-12 col-sm-6 col-lg-4 mb-1">
                <table className="menu-item-table w-75">
                    <tbody>
                        {img ? (
                            <tr>
                                <td colSpan="3">
                                    <img
                                        className="w-100"
                                        src={img}
                                        alt={name}
                                    />
                                </td>
                            </tr>
                        ) : (
                            <></>
                        )}
                        <tr>
                            <td className="menu-item-code">{code}</td>
                            <td className="menu-item-name">
                                <strong>{name}</strong>
                            </td>
                            <td className="menu-item-price">{price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
