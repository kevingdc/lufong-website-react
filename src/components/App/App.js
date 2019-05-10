import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

// Page imports
import Main from '../Main'

// Component imports
import NavigationBar from '../NavigationBar'
import Footer from '../Footer'

function App() {
    return (
        <div className="App d-flex flex-column">
            <BrowserRouter>
                <NavigationBar />

                <Main />

                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
