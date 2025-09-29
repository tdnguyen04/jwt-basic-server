const jwt = require("jsonwebtoken")
const CustomAPIError = require("../errors/custom-error")

const login = async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  if (!email || !password) {
    throw new CustomAPIError('Please provide email and password to proceed', 400)
  }
  const payload = {
    id: new Date().getDate,
    email: email
  }

  const privateKey = process.env.JWT_PRIVATE_KEY
  const token = jwt.sign(payload, privateKey, { algorithm: 'HS256', expiresIn: '20m' })
  res.status(200).json({ ...payload, token: token })
}

const dashboard = async (req, res) => {
  console.log(`dashboard`)
  res.send('dashboard')
}

module.exports = { login, dashboard }