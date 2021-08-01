const router = require('express').Router();
const {
  getUsers,
  getUserById
} = require("../../controllers/user-controller");

router
  .route('/')
  .get(getUsers);
  // .post(createUser);

router
  .route('/:id')
  .get(getUserById);
//   .put(updateUser)
//   .delete(deleteUser);

// router
//   .route('/api/users/:userId/friends/:friendId')
//   .post(addFriend)
//   .delete(removeFriend)
module.exports = router;
