const logger = require('../lib/logger')
const app = require('../../server/main')

logger.info('Starting server...')

let port = process.env.PORT || 3000
app.listen(port, () => {
  logger.success(`Server is running at http://localhost:${port}`)
})
