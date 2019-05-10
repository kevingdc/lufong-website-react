import * as actions from './actionTypes'

export const setSelectedLocation = (locationId, locationUrl) => {
    return {
        type: actions.SET_SELECTED_LOCATION,
        payload: { locationId, locationUrl },
    }
}
