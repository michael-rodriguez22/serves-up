const { Thought } = require("../models");

const thoughtController = {
    getThoughts,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction,
}

module.exports = thoughtController;