const CustomAPIError = require("../errors/custom-error")

const login = async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  if (!email || !password){
    throw new CustomAPIError('Please provide email and password to proceed', 400)
  }
  res.send('Log in coming ...')
}

const dashboard = async (req, res) => {
  console.log(`dashboard`)
  res.send('dashboard')
}

module.exports = { login, dashboard }