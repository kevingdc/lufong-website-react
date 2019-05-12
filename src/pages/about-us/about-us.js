import React, { Component } from 'react'
import './style.css'

// Asset imports
import logo from '../../assets/img/lufong-logo.png'
import pansitKing from '../../assets/img/lufong-pansit-king.png'

export default class AboutUs extends Component {
    render() {
        return (
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="offset-md-1 col-md-3">
                        <img
                            className="d-none d-md-inline-block img-fluid"
                            src={logo}
                            alt="LuFong"
                        />
                    </div>
                    <div className="col-md-7">
                        <h1 className="info-header">Our Story</h1>
                        <p>
                            Luyong has been synonymous with great Cantonese food
                            with a Filipino twist - merging the family's
                            cultural roots with local foodways. Well loved by
                            Marikenyos and continuously being discovered by
                            local tourists, Luyong has grown outwards. The
                            "panciteria" started from just pancit to more varied
                            dishes such as lechon kawali and even whole
                            lapu-lapu. The restaurant has expanded from one
                            branch to three, with two emerging branches outside
                            Marikina City. The branches are currently handled by
                            third generation of the family Louie Fong (for the
                            Montalban Branch), that's why the branches of Luyong
                            is called LuFong. Along with the family of Louie
                            Fong, his uncles are the ones who currently own the
                            other Branch of Luyong.
                        </p>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="offset-md-1 col-md-7">
                        <h1 className="info-header">
                            70 Years of Cantonese - Filipino Flavors
                        </h1>
                        <p>
                            LuFong is committed to creating strong relationships
                            through the one thing that requires no age, race,
                            nor language: <strong>food</strong>.
                        </p>
                        <p>
                            The country's history is full of overlapping
                            cultures and values, of chich LuFong preserves in
                            the form of Cantonese - Filipino dishes that you
                            love
                        </p>
                        <p>
                            Throughout the years, LuFong has been in the hearts
                            of Marikenyos and desires to bring more and more
                            people together, through thick and thin.
                        </p>
                    </div>

                    <div className=" col-md-3">
                        <img
                            className="d-none d-md-inline-block img-fluid"
                            src={pansitKing}
                            alt="LuFong Pansit King"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
