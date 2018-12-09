import React, { Component } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
	display: inline-block;
	position: fixed;
	right: 0;
	margin: 20px 40px;
	padding: 30px;
	text-align: center;
	border: 1px solid grey;
	background: #fdf8cf91;
	max-width: 300px;

	h2 {
		margin: 0;
	}
	
	img {
		width: 200px;
	}
	
	table {
		width: 100%;
	}

	td:first-child {
		text-align: left;
		font-weight: 600;
	}
`

class Card extends Component {
	render() {
		return <CardWrapper>
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
		</CardWrapper>;
	}
}

export default Card;