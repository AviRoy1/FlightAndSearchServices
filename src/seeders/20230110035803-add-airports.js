'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      
      {
        name: 'Netaji Subhash Chandra Bose International Airport',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kempegowda International Airport',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysuru Airport',
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hindon Airport',
        cityId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chennai International Airport',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Madurai Airport',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tuticorin Airport',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pune International Airport',
        cityId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sardar Vallabhbhai Patel International Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mehsana Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Surat International Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jay Prakash Narayan Airport ',
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: ' Lal Bahadur Shastri Airport',
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patna Airport',
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Devi Ahilyabai Holkar International Airport',
        cityId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indore Airport',
        cityId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
