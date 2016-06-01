// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: require('./config/configuration.json').database.connection
  }


};
