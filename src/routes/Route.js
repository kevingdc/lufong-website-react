import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import Products from '../pages/products'
import Promos from '../pages/promos'
import Locations from '../pages/locations'
import AboutUs from '../pages/about-us'

const routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/promos" component={Promos} />
            <Route path="/locations" component={Locations} />
            <Route path="/about-us" component={AboutUs} />
            <Route component={Home} />
        </Switch>
    )
}

export default routes
