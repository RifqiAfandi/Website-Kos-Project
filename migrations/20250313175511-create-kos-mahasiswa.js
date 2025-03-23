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
      name: { type: DataTypes.STRING, allowNull: false },
      gender: {
        type: DataTypes.ENUM("Putra", "Putri"),
        defaultValue: "Putra",
        validate: {
          isIn: {
            args: [["Putra", "Putri"]],
            msg: "Gender Tidak Ditemukan",
          },
        },
        allowNull: false,
      },
      description: { type: DataTypes.STRING, allowNull: false },
      phone_number: { type: DataTypes.INTEGER, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.BIGINT, allowNull: false },
      facility: { type: DataTypes.STRING, allowNull: false },
      kosImg: DataTypes.TEXT,
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