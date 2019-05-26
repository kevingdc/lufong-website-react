import React, { Component } from 'react'
import './style.css'

// Component imports
import SoloMeals from './components/SoloMeals'

export default class Products extends Component {
    render() {
        return (
            <div className="container-fluid">
                <SoloMeals />
            </div>
        )
    }
}
