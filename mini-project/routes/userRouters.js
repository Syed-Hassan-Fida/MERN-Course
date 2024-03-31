const express = require('express')
const { getAllUsers, createUser, updateUser, getSingleUser, deleteUser } = require('../controllers/userController')

const router = express.Router()

router.route('/').get(getAllUsers).post(createUser)

router.route('/:id').patch(updateUser).get(getSingleUser).delete(deleteUser)

module.exports = router