export const FETCH_BEGIN = 'FETCH_BEGIN';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

const receivePokedex = (data) => {
	return {
		type: RECEIVE_ITEMS,
		items: data.pokemon_entries,
		receivedAt: Date.now()
	}
};

export const fetchPokedex = () => {
	return dispatch => {
		return fetch(`https://pokeapi.co/api/v2/pokedex/2/`)
			.then(response => response.json())
			.then(data => dispatch(receivePokedex(data)))
	}
};