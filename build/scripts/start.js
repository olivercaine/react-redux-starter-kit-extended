const logger = require('../lib/logger')
const app = require('../../server/main');
const serverSocket = require('../../custom/sockets/ServerSocket')

logger.info('Starting server...')

const server = app.listen(3000, () => {
	logger.success('Server is running at http://localhost:3000')
})

serverSocket(server)
