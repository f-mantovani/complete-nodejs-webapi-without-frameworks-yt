import http from 'node:http'
import handler from './handler.js'

const PORT = process.env.PORT || 5005

const server = http
	.createServer(handler)
	.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))

export { server }
