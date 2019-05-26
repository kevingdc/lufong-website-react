import React, { Component } from 'react'
import './style.css'

// Component imports
import SoloMeals from './components/SoloMeals'
import Pancit from './components/Pancit'
import SoupAndNoodles from './components/SoupAndNoodles'
import Chicken from './components/Chicken'

export default class Products extends Component {
    render() {
        return (
            <div className="container-fluid">
                <SoloMeals />
                {/* <Pancit /> */}
                <SoupAndNoodles />
                <Chicken />
            </div>
        )
    }
}
