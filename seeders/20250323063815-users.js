"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("alhamdulillah", 10);
    const profilUrl =
      "https://ik.imagekit.io/RifqiAfandi/profileImg.png?updatedAt=1742712498677";
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "admin@example.com",
          password: hashedPassword,
          name: "Admin",
          phone: 1234567890,
          role: "admin",
          profileImg: profilUrl,
        },
        {
          email: "user@example.com",
          password: hashedPassword,
          name: "Vicky",
          phone: 9876543210,
          role: "user",
          profileImg: profilUrl,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
