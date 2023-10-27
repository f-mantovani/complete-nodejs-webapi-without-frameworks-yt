export default class HeroService {
	constructor({ heroRepository }) {
		this.heroRepository = heroRepository
	}

	find() {
		return this.heroRepository.find()
	}
	create(data) {
		// calculations before sending to the database should be here
		return this.heroRepository.create(data)
	}
}
