import React, { Component } from 'react';
import styled from 'styled-components'

const ListItem = styled.div`
	border-bottom: 1px solid grey;
	padding: 10px;
	cursor: pointer;
	
	&:hover {
		background: #fdf8cf;
	}
`;


class Card extends Component {
	render() {
		return <ListItem onClick={() => this.props.findPokemon(this.props.item.entry_number)}><div>
			<div>{this.props.item.pokemon_species.name}</div>
		</div></ListItem>;
	}
}

export default Card;