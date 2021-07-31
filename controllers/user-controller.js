const { User } = require("../models");

const userController = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
}

module.exports = userController;