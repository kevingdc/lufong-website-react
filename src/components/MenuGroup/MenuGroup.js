import React, { Component } from 'react'
import './style.css'

// Component imports
import MenuItem from './components/MenuItem'

export default class MenuGroup extends Component {
    render() {
        return (
            <section className="menu-group" id={this.props.id}>
                <div className="d-flex justify-content-center">
                    <div className="menu-header text-center d-inline-block">
                        <hr className="header-line" />
                        <h1>{this.props.heading}</h1>
                        <hr className="header-line" />
                    </div>
                </div>
                <div className="menu-list row justify-content-center">
                    {this.props.menu.map((item, index) => (
                        <MenuItem
                            key={index}
                            name={item.name}
                            img={item.img}
                            code={item.code}
                            price={item.price}
                        />
                    ))}
                </div>
            </section>
        )
    }
}
