import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'

// Page imports
import Home from '../../pages/home'

// Component imports
import NavigationBar from '../NavigationBar'

function App() {
    return (
        <div className="App">
            <NavigationBar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
