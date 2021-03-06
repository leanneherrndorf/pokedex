import React, { Component } from 'react';
import Card from './Card';
import styled from 'styled-components';

const ListWrapper = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
`;

class List extends Component {
	render() {
			return (
				<ListWrapper>
					{this.props.items && this.props.items.map((value, key) =>
						<Card key={key} item={value} findPokemon={this.props.findPokemon}></Card>
					)}
				</ListWrapper>
			)
	}
}

export default List;