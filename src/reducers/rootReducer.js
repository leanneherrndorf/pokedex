import { combineReducers } from 'redux';
import {
	FETCH_BEGIN,
	RECEIVE_ITEMS,
	FETCH_FAILURE
} from '../actions/actions'

function items(
	state= {
		pokedex: []
	}, action) {
	switch (action.type) {
	case RECEIVE_ITEMS:
		return Object.assign({}, state, {
			isFetching: false,
			didInvalidate: false,
			pokedex: action.items,
			lastUpdated: action.receivedAt
		});
		default:
			return state
	}
}

export default combineReducers({
	items
});