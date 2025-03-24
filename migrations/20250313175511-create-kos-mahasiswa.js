'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kos_Mahasiswa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: { type: Sequelize.STRING, allowNull: false },
      gender: {
        type: Sequelize.ENUM("Putra", "Putri"),
        defaultValue: "Putra",
        validate: {
          isIn: {
            args: [["Putra", "Putri"]],
            msg: "Gender Tidak Ditemukan",
          },
        },
        allowNull: false,
      },
      description: { type: Sequelize.STRING, allowNull: false },
      phone_number: { type: Sequelize.STRING, allowNull: false },
      city: { type: Sequelize.STRING, allowNull: false },
      price: { type: Sequelize.BIGINT, allowNull: false },
      facility: { type: Sequelize.STRING, allowNull: false },
      kosImg: Sequelize.TEXT,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Kos_Mahasiswa');
  }
};