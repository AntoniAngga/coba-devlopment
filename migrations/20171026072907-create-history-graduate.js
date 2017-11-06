'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('History_graduates', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      id_graduate: {
        type: Sequelize.STRING
      },
      id_company: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('History_graduates');
  }
};