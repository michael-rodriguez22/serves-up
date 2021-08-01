const { User } = require("../models");

const userController = {
    getUsers: function(req, res) {
        User.find({})
        .select("-__v")
        .then(userData => res.status(200).json(userData))
        .catch(err => res.status(400).json(err));
    },

    getUserById: function({ params }, res) {
        User.findOne({ _id: params.id })
        .select("-__v")
        .then(userData => res.status(200).json(userData))
        .catch(err => res.status(400).json(err));
    },
    // createUser,
    // updateUser,
    // deleteUser,
    // addFriend,
    // removeFriend,
}

module.exports = userController;