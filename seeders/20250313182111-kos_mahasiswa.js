"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Kos_Mahasiswa",
      [
        // Jakarta
        {
          name: "Kos Mahasiswa 1",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9803928746,
          city: "Jakarta",
          price: 1744191,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 2",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 1583499493,
          city: "Jakarta",
          price: 1266977,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 3",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 8691109840,
          city: "Jakarta",
          price: 1819020,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 4",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 3009263505,
          city: "Jakarta",
          price: 1981358,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 5",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 3363046241,
          city: "Jakarta",
          price: 1596242,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },

        // Surabaya
        {
          name: "Kos Mahasiswa 6",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 1392765123,
          city: "Surabaya",
          price: 1754000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 7",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 1122334455,
          city: "Surabaya",
          price: 1678900,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 8",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9988776655,
          city: "Surabaya",
          price: 1600000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 9",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 7865432109,
          city: "Surabaya",
          price: 1545000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 10",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 5432109876,
          city: "Surabaya",
          price: 1450000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },

        // Bandung
        {
          name: "Kos Mahasiswa 11",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9088776655,
          city: "Bandung",
          price: 1670000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 12",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 8776655443,
          city: "Bandung",
          price: 1569000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 13",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 1234567890,
          city: "Bandung",
          price: 1500000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 14",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9876543210,
          city: "Bandung",
          price: 1625000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 15",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9632587410,
          city: "Bandung",
          price: 1793000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },

        // Yogyakarta
        {
          name: "Kos Mahasiswa 16",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9483726531,
          city: "Yogyakarta",
          price: 1450000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 17",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9123456789,
          city: "Yogyakarta",
          price: 1582000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 18",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 6543217890,
          city: "Yogyakarta",
          price: 1405000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 19",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 7412589630,
          city: "Yogyakarta",
          price: 1600000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 20",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 3584621970,
          city: "Yogyakarta",
          price: 1690000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },

        // Medan
        {
          name: "Kos Mahasiswa 21",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9843726510,
          city: "Medan",
          price: 1550000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 22",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9923445234,
          city: "Medan",
          price: 1620000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 23",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 8765432109,
          city: "Medan",
          price: 1455000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 24",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 3541896570,
          city: "Medan",
          price: 1720000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 25",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 7412583690,
          city: "Medan",
          price: 1600000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },

        // Denpasar
        {
          name: "Kos Mahasiswa 26",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 1198765432,
          city: "Denpasar",
          price: 1689000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 27",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 1029384756,
          city: "Denpasar",
          price: 1450000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 28",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9876543210,
          city: "Denpasar",
          price: 1798000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 29",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 8493027614,
          city: "Denpasar",
          price: 1695000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 30",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 3564987250,
          city: "Denpasar",
          price: 1540000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },

        // Semarang
        {
          name: "Kos Mahasiswa 31",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 1843276541,
          city: "Semarang",
          price: 1625000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 32",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 5467389201,
          city: "Semarang",
          price: 1485000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 33",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 3217896540,
          city: "Semarang",
          price: 1530000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 34",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 1278543690,
          city: "Semarang",
          price: 1758000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 35",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 8132754698,
          city: "Semarang",
          price: 1682000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },

        // Makassar
        {
          name: "Kos Mahasiswa 36",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 7845123690,
          city: "Makassar",
          price: 1650000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 37",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9023475612,
          city: "Makassar",
          price: 1720000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 38",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 1145632790,
          city: "Makassar",
          price: 1600000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 39",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9876543210,
          city: "Makassar",
          price: 1560000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 40",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 5739846123,
          city: "Makassar",
          price: 1785000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },

        // Depok
        {
          name: "Kos Mahasiswa 41",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 8376542901,
          city: "Depok",
          price: 1690000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 42",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 6234567890,
          city: "Depok",
          price: 1505000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 43",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9876254310,
          city: "Depok",
          price: 1580000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 44",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 7896541230,
          city: "Depok",
          price: 1650000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 45",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 1234567890,
          city: "Depok",
          price: 1550000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },

        // Malang
        {
          name: "Kos Mahasiswa 46",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 6483729465,
          city: "Malang",
          price: 1510000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 47",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 5293846172,
          city: "Malang",
          price: 1640000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 48",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 1837462901,
          city: "Malang",
          price: 1450000,
          facility: "Wi-Fi, AC, Furnitur lengkap 3",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 49",
          gender: "Putra",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 6374189025,
          city: "Malang",
          price: 1500000,
          facility: "Wi-Fi, AC, Furnitur lengkap 2",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
        {
          name: "Kos Mahasiswa 50",
          gender: "Putri",
          description: "Kos mahasiswa yang nyaman dan aman",
          phone_number: 9514268370,
          city: "Malang",
          price: 1620000,
          facility: "Wi-Fi, AC, Furnitur lengkap 1",
          kosImg:
            "https://ik.imagekit.io/RifqiAfandi/Mahasiswa.jpg?updatedAt=1742572430515",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Kos_Mahasiswa", null, {});
  },
};
