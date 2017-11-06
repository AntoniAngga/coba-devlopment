'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Review_graduates', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      id_company: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_graduate: {
        allowNull: false,
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
    return queryInterface.dropTable('Review_graduates');
  }
};
