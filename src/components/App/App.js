import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

// Page imports
import Home from '../../pages/home'
import Locations from '../../pages/locations'
import AboutUs from '../../pages/about-us'

// Component imports
import NavigationBar from '../NavigationBar'
import Footer from '../Footer'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/locations" component={Locations} />
                    <Route path="/about-us" component={AboutUs} />
                </Switch>
            </BrowserRouter>

            <Footer />
        </div>
    )
}

export default App
