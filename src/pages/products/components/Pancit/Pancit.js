import React from 'react'
import './style.css'

// Asset imports
import pancitBihon from '../../../../assets/img/pancit-bihon.jpg'

export default () => {
    return (
        <section className="menu-group mb-5" id="pancit">
            <div className="menu-header">
                <hr className="header-line" />
                <h1>PANCIT</h1>
                <hr className="header-line" />
            </div>
            <div className="menu-list row">
                <div className="col-11 col-sm-10 col-lg-5 m-1">
                    <table className="menu-item-table w-100">
                        <caption>
                            Choice of: Bihon, Canton, Lomi, Miki, Sotanghon,
                            Miki-Bihon, Canton-Bihon
                        </caption>
                        <thead>
                            <tr>
                                <td />
                                <td />
                                <td className="menu-item-regular">Regular</td>
                                <td className="menu-item-queen">Queen</td>
                                <td className="menu-item-king">King</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Family</strong>
                                </td>
                                <td className="text-right">(2-3 pax)</td>
                                <td className="menu-item-regular">200</td>
                                <td className="menu-item-queen">280</td>
                                <td className="menu-item-king">250</td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Small Bilao</strong>
                                </td>
                                <td className="text-right">(5-10 pax)</td>
                                <td className="menu-item-regular">350</td>
                                <td className="menu-item-queen">450</td>
                                <td className="menu-item-king">500</td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Medium</strong>
                                </td>
                                <td className="text-right">(10-15 pax)</td>
                                <td className="menu-item-regular">500</td>
                                <td className="menu-item-queen">650</td>
                                <td className="menu-item-king">850</td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>Large</strong>
                                </td>
                                <td className="text-right">(15-20 pax)</td>
                                <td className="menu-item-regular">850</td>
                                <td className="menu-item-queen">950</td>
                                <td className="menu-item-king">1200</td>
                            </tr>

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
                        </tbody>
                    </table>
                </div>

                <div className="col-12 col-sm-6 col-lg-2">
                    <figure>
                        <img
                            className="w-100"
                            src={pancitBihon}
                            alt="Lufong Pancit Bihon"
                        />
                        <figcaption className="text-center">
                            Pancit Bihon
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    )
}
