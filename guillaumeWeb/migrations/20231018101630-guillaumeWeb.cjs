'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('activities', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      image: Sequelize.STRING,
      link: Sequelize.STRING,
      mainContent: Sequelize.TEXT,
      startDate: Sequelize.DATE,
      endDate: Sequelize.DATE,
      technology: Sequelize.STRING
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('activities');
  }
};
