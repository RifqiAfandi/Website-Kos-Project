const Users = "Dummy Admin";

async function getAllUser(req, res) {
    try {
        const {page= 1, limit= 10} = req.query;
        const offset = (page - 1) * limit;

        const totalData = await Users.count();
    
        if (totalData.length == 0) {
        return res.status(404).json({
            status: "Failed",
            message: "No data user found",
            isSuccess: false,
            data: null,
        });
        }
    
        const user = await Users.findAll({
            limit: parseInt(limit),
            offset: parseInt(offset),
            order : [["id", "ASC"]],
        });

        totalPages = Math.ceil(totalData / limit);

        res.status(200).json({
        status: "Success",
        message: "Success get user data",
        isSuccess: true,
        data: {
            user,
            totalData,
            totalPages,
            page: parseInt(page),
        },
        });
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
        const errorMessage = error.errors.map((err) => err.message);
        return res.status(400).json({
            status: "Failed",
            message: errorMessage[0],
            isSuccess: false,
            data: null,
        });
        } else if (error.name === "SequelizeDatabaseError") {
        return res.status(400).json({
            status: "Failed",
            message: error.message || "Database error",
            isSuccess: false,
            data: null,
        });
        } else {
        return res.status(500).json({
            status: "Failed",
            message: error.message,
            isSuccess: false,
            data: null,
        });
        }
    }    
}

async function getUserById(req, res) {
    try {
        const id = req.params.id;
        const user = await Users.findOne({
            where: { id: id },
        });
        if (!user) {
            return res.status(404).json({
                status: "Failed",
                message: "User not found",
                isSuccess: false,
                data: null,
            });
        }
        return res.status(200).json({
            status: "Success",
            message: "Success get user data by id",
            isSuccess: true,
            data: {user},
        });
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            const errorMessage = error.errors.map((err) => err.message);
            return res.status(400).json({
                status: "Failed",
                message: errorMessage[0],
                isSuccess: false,
                data: null,
            });
            } else if (error.name === "SequelizeDatabaseError") {
            return res.status(400).json({
                status: "Failed",
                message: error.message || "Database error",
                isSuccess: false,
                data: null,
            });
            } else {
            return res.status(500).json({
                status: "Failed",
                message: error.message,
                isSuccess: false,
                data: null,
            });
            }
    }
    
}

module.exports = {
    getAllUser,
};