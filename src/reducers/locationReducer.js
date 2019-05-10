import * as actions from '../actions/actionTypes'

const initialState = {
    locationId: null,
    locationUrl: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_SELECTED_LOCATION:
            return {
                ...state,
                locationId: action.payload.locationId,
                locationUrl: action.payload.locationUrl,
            }
        default:
            return state
    }
}
