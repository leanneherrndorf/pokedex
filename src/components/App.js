import React, { Component } from 'react';
import List from './List';
import Pokemon from '../Pokemon';
import PokeData from './PokeData';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Courier New', Courier, monospace;
		font-weight: 600;
		background: aquamarine;
	}
	
	h1 {
		text-align: center;
	}
`;

const AppWrapper = styled.div`
	margin: 20px;
`;

class App extends Component {
	getPokemonList = () => {
		fetch(`https://pokeapi.co/api/v2/pokedex/2/`)
			.then(result => result.json())
			.then(data => {
				this.setState({ items: data.pokemon_entries})
			})
			.catch(error => {
				console.log(error)
			})
	};

	constructor() {
		super();
		this.state = {
			items: [],
			pokemon: '',
			detailView: false
		};
	};

	componentDidMount = () => {
		this.getPokemonList()
	};

	findPokemon = (id) => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
			.then(result => result.json())
			.then(data => {
				console.log(data)
				const pokemon = new Pokemon(data);
				this.setState({pokemon: pokemon});
				this.setState({detailView: true});
			})
			.catch(error => {
				console.log(error)
			})
	};


  render() {
		return (
			<AppWrapper>
				<GlobalStyle/>
				<h1>Pokemon Pokedex</h1>
				<List items={this.state.items} findPokemon={this.findPokemon}/>
				{this.state.detailView && <PokeData pokemon={this.state.pokemon}/>}
			</AppWrapper>
		);
	}
}

export default App;
