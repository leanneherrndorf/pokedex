import React, { Component } from 'react';
import Card from './Card'

class List extends Component {
	render() {
		return <div className="list">
			{ this.props.items.map((value, key) =>
				<Card key={key} item={value} findPokemon={this.props.findPokemon}></Card>
			)}
		</div>;
	}
}

export default List;