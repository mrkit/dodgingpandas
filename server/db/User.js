const conn = require('./conn'),
      Sequelize = conn.Sequelize,
      bcrypt = require('bcrypt');

const User = conn.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = User;