import React from 'react'
import './style.css'

// Component imports
import King from './components/King'
import Queen from './components/Queen'
import Birthday from './components/Birthday'

export default () => {
    return (
        <div className="container-fluid pt-5">
            <King />
            <Queen />
            <Birthday />
        </div>
    )
}
