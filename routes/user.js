const express = require('express');

const router = express.Router();
const {
  createUser,
  find,
  update,
  deleteUser,
} = require('../controllers/user');
router.post('/create-user', createUser);
router.get('/api/users', find);
router.put('/api/users/:id',update);
router.delete('/api/users/:id', deleteUser);


module.exports = router;
