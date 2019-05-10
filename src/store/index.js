import { applyMiddleware, createStore } from 'redux'

import { createLogger } from 'redux-logger'
import reducer from '../reducers/rootReducer'

const logger = createLogger({
    timestamps: true,
    duration: true,
})

export default createStore(reducer, applyMiddleware(logger))
