import React from 'react'
import './style.css'
// Asset imports

export default () => {
    return (
        <section className="menu-group mb-5" id="rice">
            <div className="menu-header">
                <hr className="header-line" />
                <h1>RICE</h1>
                <hr className="header-line" />
            </div>
            <div className="menu-list row">
                <div className="col-12 col-sm-6 col-lg-4 mb-1">
                    <table className="menu-item-table w-100">
                        <tbody>
                            {/* {img ? (
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
                            )} */}
                            <tr>
                                <td className="menu-item-name" rowSpan="2">
                                    <strong>Plain Rice</strong>
                                </td>
                                <td className="menu-item-size">1 Cup</td>
                                <td className="menu-item-price">25</td>
                            </tr>
                            <tr>
                                <td className="menu-item-size">
                                    Medium (3-4 pax)
                                </td>
                                <td className="menu-item-price">80</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 mb-1">
                    <table className="menu-item-table w-100">
                        <tbody>
                            {/* {img ? (
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
                            )} */}
                            <tr>
                                <td className="menu-item-name" rowSpan="2">
                                    <strong>Shanghai Fried Rice</strong>
                                </td>
                                <td className="menu-item-size">
                                    Medium (3-4 pax)
                                </td>
                                <td className="menu-item-price">200</td>
                            </tr>
                            <tr>
                                <td className="menu-item-size">
                                    Large (5-6 pax)
                                </td>
                                <td className="menu-item-price">250</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-12 col-sm-6 col-lg-4 mb-1">
                    <table className="menu-item-table w-100">
                        <tbody>
                            {/* {img ? (
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
                            )} */}
                            <tr>
                                <td className="menu-item-name" rowSpan="2">
                                    <strong>Yangchow Fried Rice</strong>
                                </td>
                                <td className="menu-item-size">
                                    Medium (3-4 pax)
                                </td>
                                <td className="menu-item-price">220</td>
                            </tr>
                            <tr>
                                <td className="menu-item-size">
                                    Large (5-6 pax)
                                </td>
                                <td className="menu-item-price">280</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
