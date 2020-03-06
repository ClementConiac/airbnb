import { combineReducers } from 'redux'
const initialState = {
    categories: [],
    experiences: [],
    homes: [],
    popular: []
}
const listingsReducer = (state = initialState, action) => {
    return state
}
export default combineReducers({
    listings: listingsReducer
})