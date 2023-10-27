import HeroRepository from '../repositories/heroRepository.js'
import HeroService from '../services/hero.service.js'

const generateInstace = ({ filePath }) => {
	//here we connect to the DB
	const heroRepository = new HeroRepository({ file: filePath })
	const heroService = new HeroService({ heroRepository })

	return heroService
}

export { generateInstace }
