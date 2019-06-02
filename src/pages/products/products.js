import React, { Component } from 'react'
import './style.css'

// Component imports
import SoloMeals from './components/SoloMeals'
import Pancit from './components/Pancit'
import Dimsum from './components/Dimsum'
import SoupAndNoodles from './components/SoupAndNoodles'
import Chicken from './components/Chicken'
import Beef from './components/Beef'
import Pork from './components/Pork'
import Fish from './components/Fish'
import Vegetables from './components/Vegetables'
import Rice from './components/Rice'
import Dessert from './components/Dessert'

export default class Products extends Component {
    render() {
        return (
            <div className="container-fluid">
                <SoloMeals />
                <Pancit />
                <Dimsum />
                <SoupAndNoodles />
                <Chicken />
                <Beef />
                <Pork />
                <Fish />
                <Vegetables />
                <Rice />
                <Dessert />
            </div>
        )
    }
}
