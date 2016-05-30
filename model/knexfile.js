var configuration = require('../config/configuration');

module.exports = {
  client     : 'mysql',
  connection : configuration.sql,
  pool       : configuration.pool
}
