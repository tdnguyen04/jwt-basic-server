const login = async (req, res) => {
  console.log(`log in`)
  res.send('log in')
}

const dashboard = async(req, res) => {
  console.log(`dashboard`)
  res.send('dashboard')
}

module.exports = {login, dashboard}