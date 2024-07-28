// database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql' // o 'mysql', 'sqlite', etc.
});

module.exports = sequelize;