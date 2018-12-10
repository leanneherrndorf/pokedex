export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

const receivePokedex = (data) => {
	return {
		type: RECEIVE_ITEMS,
		items: data.pokemon_entries,
		receivedAt: Date.now()
	}
};

const requestItems = () => {
	return {
		type: REQUEST_ITEMS
	}
}

export const fetchPokedex = () => {
	return dispatch => {
		dispatch(requestItems());
		return fetch(`https://pokeapi.co/api/v2/pokedex/2/`)
			.then(response => response.json())
			.then(data => dispatch(receivePokedex(data)))
	}
};