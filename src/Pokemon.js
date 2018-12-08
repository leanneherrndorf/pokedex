class Pokemon {
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.height = data.height;
		this.baseExperience = data.base_experience;
		this.sprite = data.sprites.front_default;
		this.abilities = data.abilities;
	}
}

export default Pokemon;