import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

// Component imports
import ListGroup from '../../components/ListGroup'

class Locations extends Component {
    render() {
        return (
            <div className="container-fluid mt-5">
                <div className="d-flex flex-column justify-content-center align-items-stretch">
                    <h1>Find us in the following locations:</h1>
                    <div className="d-flex flex-column flex-md-row">
                        <ListGroup
                            items={[
                                {
                                    title: 'Imus',
                                    description: (
                                        <>
                                            G/F Unit, Macneny Bldg. 1172
                                            Aguinaldo Highway, Bayan Luma 4
                                            Imus, Cavite
                                            <br />
                                            (In front of Robinsons Imus)
                                        </>
                                    ),
                                    locationUrl:
                                        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.6512756043494!2d120.93749991431817!3d14.38957718607218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3f724d57f9f%3A0x3d500aefb4a12e7b!2sLufong+-+Imus+Branch!5e0!3m2!1sen!2sph!4v1549199982442',
                                    selected: true,
                                },
                                {
                                    title: 'Macapagal',
                                    description: (
                                        <>
                                            G/F Unit, Macneny Bldg. 1172
                                            Aguinaldo Highway, Bayan Luma 4
                                            Imus, Cavite
                                            <br />
                                            (In front of Robinsons Imus)
                                        </>
                                    ),
                                    locationUrl:
                                        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.1112617960484!2d120.98507501431956!3d14.535627882563745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cb24ed311a2d%3A0x73125c1efd5b6a1!2sLuFong+Pasay+Macapagal!5e0!3m2!1sen!2sph!4v1549199886948',
                                },
                            ]}
                        />
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                title="LuFong Branch Location"
                                className="embed-responsive-item"
                                src={this.props.selectedLocationUrl}
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedLocationUrl: state.location.locationUrl,
    }
}

export default connect(
    mapStateToProps,
    null
)(Locations)
