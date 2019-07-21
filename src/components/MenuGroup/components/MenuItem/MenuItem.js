import React, { Component } from 'react'
import './style.css'

// Asset imports
import bestsellerIcon from '../../../../assets/img/bestseller.png'

export default class MenuItem extends Component {
    render() {
        const { img, code, name, price, bestseller, large } = this.props

        return (
            <div
                className={
                    'col-12 ' +
                    (large ? 'col-lg-6' : 'col-sm-6 col-lg-4') +
                    ' mb-1'
                }
            >
                <table className="menu-item-table w-100">
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
                            {bestseller ? (
                                <td>
                                    <img
                                        src={bestsellerIcon}
                                        width={50}
                                        // className="position-absolute float-right"
                                        alt=""
                                    />
                                </td>
                            ) : (
                                <td />
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
