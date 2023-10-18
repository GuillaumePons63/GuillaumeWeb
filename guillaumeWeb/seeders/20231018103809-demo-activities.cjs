'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('activities', [
      {
        title: 'Activité 1',
        description: 'Description pour l\'activité 1',
        image: null,
        link: null,
        mainContent: 'Contenu principal de l\'activité 1',
        startDate: new Date(),
        endDate: null,
        technology: '[React,NodeJs]',


      },
      {
        title: 'Activité 2',
        description: 'Description pour l\'activité 2',
        image: null,
        link: null,
        mainContent: 'Contenu principal de l\'activité 2',
        startDate: new Date(),
        endDate: null,
        technology: '[React,NodeJs]',
      },
      {
        title: 'Activité 3',
        description: 'Description pour l\'activité 3',
        image: null,
        link: null,
        mainContent: 'Contenu principal de l\'activité 3',
        startDate: new Date(),
        endDate: null,
        technology: '[React,NodeJs]',
      }
      // ... Ajoutez autant d'entrées que vous le souhaitez
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('activities', null, {});
  }
};
