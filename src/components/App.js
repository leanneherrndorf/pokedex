import React, { Component } from 'react';
import List from './List';
import Pokemon from '../Pokemon';
import PokeData from './PokeData';
import styled, { createGlobalStyle } from 'styled-components';
import { connect } from 'react-redux';
import { fetchPokedex } from '../actions/actions';

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


const mapStateToProps = state => ({
	items: state.items.pokedex,
	isFetching: state.items.isFetching
});

const mapDispatchToProps = dispatch => ({
	fetchPokedex: () => dispatch(fetchPokedex())
});


class App extends Component {
	constructor() {
		super();
		this.state = {
			detailView: false
		};
	};

	componentDidMount = () => {
		this.props.fetchPokedex()
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
  	const { items, isFetching } = this.props;
		return (
			<AppWrapper>
				<GlobalStyle/>
				<h1>Pokemon Pokedex</h1>
				{isFetching && <div>Loading...</div>}
				{items.length > 0 && <List items={items} findPokemon={this.findPokemon}/>}
				{this.state.detailView && <PokeData pokemon={this.state.pokemon}/>}
			</AppWrapper>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
