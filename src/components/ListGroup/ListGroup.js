import React, { Component } from 'react'
import './style.css'

// Component imports
import ListItem from './components/ListItem'

export default class ListGroup extends Component {
    render() {
        return (
            <div className="list-group d-flex flex-column" id="list-container">
                {this.props.items.map((item, index) => (
                    <ListItem
                        key={index}
                        id={index}
                        title={item.title}
                        contactDetails={item.contactDetails}
                        description={item.description}
                        locationUrl={item.locationUrl}
                        selected={item.selected}
                    />
                ))}

                {/* <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h2 className="mb-1">Imus</h2>
                    </div>
                    <p className="mb-1">
                        G/F Unit, Macneny Bldg. 1172 Aguinaldo Highway, Bayan
                        Luma 4 Imus, Cavite <br />
                        (In front of Robinsons Imus)
                    </p>
                </div>

                <div className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h2 className="mb-1">Macapagal</h2>
                    </div>
                    <p className="mb-1">
                        G/F Unit, Macneny Bldg. 1172 Aguinaldo Highway, Bayan
                        Luma 4 Imus, Cavite <br />
                        (In front of Robinsons Imus)
                    </p>
                </div> */}
            </div>
        )
    }
}
