const Sequelize = require('sequelize'),
      conn = new Sequelize('postgres://localhost/dodgingpandas', {logging: false, operatorsAliases: false});

module.exports = conn;