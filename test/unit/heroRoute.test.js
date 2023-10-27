import { test, mock } from 'node:test'
import assert from 'node:assert'
import { routes } from '../../src/routes/hero.routes.js'
import { DEFAULT_HEADER } from '../../src/util/util.js'
import exp from 'node:constants'

const callTracker = new assert.CallTracker()
process.on('exit', () => callTracker.verify())

test('Hero routes - endpoints test suite', async (t) => {
	await t.test('it should call /heroes:get', async () => {
		const databaseMock = [
			{ id: 'c14ea0fa-ff56-4e64-a4f4-b9a6caa93aa4', name: 'Batman', age: 50, power: 'rich' },
		]

		const heroServiceStub = {
			find: async () => databaseMock,
		}

		const endpoints = routes({ heroService: heroServiceStub })

		const endpoint = '/heroes:get'
		const request = {}
		const response = {
			writeHead: mock.fn((...items) => {
				const expected = {
					status: 200,
					header: DEFAULT_HEADER,
				}
				// console.log(items)
				// assert.strictEqual(status, expected.status)
				// assert.deepStrictEqual(header, expected.header)
			}),
			// callTracker.calls((status, header) => {
			// 	const expected = {
			// 		status: 200,
			// 		header: DEFAULT_HEADER,
			// 	}
			// 	assert.strictEqual(status, expected.status)
			// 	assert.deepStrictEqual(header, expected.header)
			// }),
			write: () => {},
			//  callTracker.calls((item) => {
			// 	const expected = JSON.stringify({
			// 		success: true,
			// 		heroes: databaseMock,
			// 	})
			// 	assert.strictEqual(item, expected, 'write should be called with the correct payload')
			// }),
			end: () => {},
			// callTracker.calls((item) => {
			// 	assert.strictEqual(item, undefined, 'end should be called without params')
			// }),
		}

		const route = endpoints[endpoint]
		await route(request, response)
		console.log(response.writeHead.arguments)
	})
	await t.todo('it should call /heroes:post')
})
