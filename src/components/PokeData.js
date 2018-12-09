import React, { Component } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	position: fixed;
	top: 60px;
	right: 0;
	margin: 20px 40px;
	padding: 30px;
	border: 1px solid grey;
	background: #fdf8cf91;
	width: 300px;

	h2 {
		margin: 0;
	}
	
	img {
		width: 200px;
	}
`;

const Grid = styled.div`
	width: 250px;
`;

const Row = styled.div`
	margin: 10px 0px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-weight: ${props => props.theme.fontweight};
`;

const Col = styled.div`
	text-align: ${props => props.theme.alignment};
	font-weight: ${props => props.theme.fontweight};
`;

Row.defaultProps = {
	theme: {
		fontweight: "600"
	}
};

Col.defaultProps = {
	theme: {
		alignment: "left",
		fontweight: "600"
	}
};

const detailRow = {
	fontweight: "400"
};
const right = {
	alignment: "right",
	fontweight: "400"
};

class Card extends Component {
	render() {
		return <CardWrapper>
			<h2>{this.props.pokemon.name}</h2>
			<img alt= "" src={this.props.pokemon.sprite} />
			<Grid>
				<Row>
					<Col>Base Experience: </Col>
					<Col theme={right}>{this.props.pokemon.baseExperience}</Col>
				</Row>
				<Row>
					<Col>Height: </Col>
					<Col theme={right}>{this.props.pokemon.height}</Col>
				</Row>
				<Row>Abilities</Row>
				{ this.props.pokemon.abilities.map((value, key) =>
					<Row theme={detailRow} key={key}>+ {value.ability.name}</Row>
				)}
			</Grid>
		</CardWrapper>;
	}
}

export default Card;