import React from 'react'
import './style.css'

export default props => {
    return (
        <div className="col-12 col-md-4 mb-3">
            <img src={props.img} className="w-100" alt={props.name} />
        </div>
    )
}
