const express = require('express')
const { login, dashboard, signup } = require('../controllers/main')
const router = express.Router()

router.route('/login').post(login)
router.route('/dashboard').get(dashboard)
router.route('/signup').post(signup)

module.exports = router