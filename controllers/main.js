const jwt = require("jsonwebtoken")
const CustomAPIError = require("../errors/custom-error")
const {_findUser} = require('../models/users')

const login = async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  // input validation
  if (!email || !password) {
    throw new CustomAPIError('Please provide email and password to proceed', 400)
  }

  // check data
  if (! await _findUser({email, password})) {
    console.log(`throw error 401`)
    throw new CustomAPIError('Unauthorized access', 401)
  }

  const payload = {
    id: new Date().getDate,
    email: email
  }

  // create JWT token
  const privateKey = process.env.JWT_PRIVATE_KEY
  const token = jwt.sign(payload, privateKey, { algorithm: 'HS256', expiresIn: '20m' })

  // respond to client
  res.status(200).json({ ...payload, token: token })
}

const signup = async (req, res) => {
  const {email, password, firstName, lastName} = req.body
  // input validation
  if (!email || !password || !firstName || !lastName) {
    throw new CustomAPIError('Please provide email and password to proceed', 400)
  }
  // update data

  // respond to client
}

const dashboard = async (req, res) => {
  console.log(`dashboard`)
  res.send('dashboard')
}

module.exports = { login, dashboard, signup }