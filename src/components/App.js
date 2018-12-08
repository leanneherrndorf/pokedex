import React, { Component } from 'react';

class App extends Component {
	render() {
	getPokemonList = () => {
		fetch(`http://pokeapi.salestock.net/api/v2/pokedex/2`)
			.then(result => result.json())
			.then(data => {
				this.setState({ items: data.pokemon_entries})
			})
			.catch(error => {
				console.log(error)
			})
	}

	constructor() {
		super();
		this.state = {
			items: []
		};
	}

	componentDidMount = () => {
		this.getPokemonList()
	}
		return (
			<div className="App">
				<header className="App-header">
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;

