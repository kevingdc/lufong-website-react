import React, { Component } from 'react'
import './style.css'

// Component imports
import MenuItem from './components/MenuItem'

export default class MenuGroup extends Component {
    render() {
        return (
            <section className="menu-group mb-5" id={this.props.id}>
                <div className="menu-header">
                    <hr className="header-line" />
                    <h1>{this.props.heading}</h1>
                    <hr className="header-line" />
                </div>
                <div className="menu-list row">
                    {this.props.menu.map((item, index) => (
                        <MenuItem
                            key={index}
                            name={item.name}
                            img={item.img}
                            code={item.code}
                            price={item.price}
                            bestseller={item.bestseller}
                            large={this.props.large}
                        />
                    ))}
                </div>
            </section>
        )
    }
}
