"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("alhamdulillah", 10);
    const profilUrl = "https://ik.imagekit.io/RifqiAfandi/profileImg.png?updatedAt=1742712498677";
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "John Doe",
          isBetaMember: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
