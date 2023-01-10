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

    await queryInterface.bulkInsert('Airplanes' , [
      {
        modelNumber: 'Boeing 747' ,
        capacity: 700,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Airbus A380' ,
        capacity: 550,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Airbus A220' ,  
        capacity: 320,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Embraer E175' ,
        capacity: 210,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Boeing 777' ,
        capacity: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});

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
