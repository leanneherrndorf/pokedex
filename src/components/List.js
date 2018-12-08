import React, { Component } from 'react';
import Card from './Card'

class List extends Component {
	render() {
		return <div className="list">
			{ Object.keys(this.props.items).map((key) =>
				<Card key={key} item={this.props.items[key]} findPokemon={this.props.findPokemon}></Card>
			)}
		</div>;
	}
}

export default List;