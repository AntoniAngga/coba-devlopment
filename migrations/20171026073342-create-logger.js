'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Loggers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      last_login: {
        type: Sequelize.DATE
      },
      ip: {
        type: Sequelize.STRING
      },
      browser: {
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Loggers');
  }
};