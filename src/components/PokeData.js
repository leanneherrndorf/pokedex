import React, { Component } from 'react';

class Card extends Component {
	render() {
		return <div className="details">
			<h2>{this.props.pokemon.name}</h2>
			<img alt= "" src={this.props.pokemon.sprite} />
			<table>
				<tbody>
					<tr>
						<td>Base Experience: </td>
						<td>{this.props.pokemon.baseExperience}</td>
					</tr>
					<tr>
						<td>Height: </td>
						<td>{this.props.pokemon.height}</td>
					</tr>
					<tr>
						<td className="abilities">Abilities</td>
						{ Object.keys(this.props.pokemon.abilities).map((key) =>
							<td key={key}>+ {this.props.pokemon.abilities[key].ability.name}</td>
						)}
					</tr>
				</tbody>
			</table>
		</div>;
	}
}

export default Card;