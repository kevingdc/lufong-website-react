import React from 'react'
import './style.css'

// Component imports
import SulitSarap from './components/SulitSarap'
import Birthday from './components/Birthday'

export default () => {
    return (
        <div className="container-fluid pt-5">
            <SulitSarap />
            <Birthday />
        </div>
    )
}
