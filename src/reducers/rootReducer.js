import { combineReducers } from 'redux';
import {
	RECEIVE_ITEMS, REQUEST_ITEMS
} from '../actions/actions'

function items(
	state= {
		pokedex: [],
		isFetching: false
	}, action) {
	switch (action.type) {
		case REQUEST_ITEMS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_ITEMS:
			return Object.assign({}, state, {
				isFetching: false,
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