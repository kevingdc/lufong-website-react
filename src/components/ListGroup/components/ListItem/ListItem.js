import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

// Action import
import { setSelectedLocation } from '../../../../actions/locationActions'

class ListItem extends Component {
    componentWillMount = () => {
        if (this.props.selected) {
            this.props.setSelectedLocation(
                this.props.id,
                this.props.locationUrl
            )
        }
    }

    setSelected = () => {
        this.props.setSelectedLocation(this.props.id, this.props.locationUrl)
    }

    render() {
        return (
            <div
                className={
                    this.props.id === this.props.selectedLocationId
                        ? 'list-group-item list-group-item-action flex-column align-items-start selected'
                        : 'list-group-item list-group-item-action flex-column align-items-start'
                }
                onClick={this.setSelected}
            >
                <div className="d-flex w-100 justify-content-between">
                    <h2 className="mb-1">{this.props.title}</h2>
                </div>
                <p className="mb-1">{this.props.description}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedLocationId: state.location.locationId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedLocation: (locationId, locationUrl) =>
            dispatch(setSelectedLocation(locationId, locationUrl)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem)
