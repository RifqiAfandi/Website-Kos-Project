"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Cities",
      [
        { 
          name: 'Jakarta', 
          cityImg: 'https://ik.imagekit.io/RifqiAfandi/Jakarta.jpg?updatedAt=1742564626064', 
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        { 
          name: 'Surabaya', 
          cityImg: 'https://ik.imagekit.io/RifqiAfandi/Surabaya.jpg?updatedAt=1742564621801', 
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        { 
          name: 'Bandung', 
          cityImg: 'https://ik.imagekit.io/RifqiAfandi/Bandung.jpg?updatedAt=1742564623349', 
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        { 
          name: 'Yogyakarta', 
          cityImg: 'https://ik.imagekit.io/RifqiAfandi/Yogyakarta.jpg?updatedAt=1742564621825', 
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        { 
          name: 'Medan', 
          cityImg: 'https://ik.imagekit.io/RifqiAfandi/Medan.jpg?updatedAt=1742564622138', 
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        { 
          name: 'Denpasar', 
          cityImg: 'https://ik.imagekit.io/RifqiAfandi/Denpasar.jpg?updatedAt=1742564623864', 
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        { 
          name: 'Semarang', 
          cityImg: 'https://ik.imagekit.io/RifqiAfandi/Semarang.jpg?updatedAt=1742564624261', 
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        { 
          name: 'Makassar', 
          cityImg: 'https://ik.imagekit.io/RifqiAfandi/Makassar.jpg?updatedAt=1742564622637', 
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        { 
          name: 'Depok', 
          cityImg: 'https://ik.imagekit.io/RifqiAfandi/Depok.jpg?updatedAt=1742565078863', 
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
        { 
          name: 'Malang', 
          cityImg: 'https://ik.imagekit.io/RifqiAfandi/Malang.jpg?updatedAt=1742564624413', 
          createdAt: new Date(), 
          updatedAt: new Date() 
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cities", null, {});
  },
};
