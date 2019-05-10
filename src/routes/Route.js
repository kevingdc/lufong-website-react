import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import Locations from '../pages/locations'
import AboutUs from '../pages/about-us'

const routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/locations" component={Locations} />
            <Route path="/about-us" component={AboutUs} />
        </Switch>
    )
}

export default routes
