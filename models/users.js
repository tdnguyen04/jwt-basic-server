const path = require('path')

const { readFile, writeFile } = require('fs').promises

const url = path.resolve(__dirname, '..', 'users.json')

const _readUsers = async () => {
  const users = await readFile(url, 'utf8')
  return JSON.parse(users)
}

const _findUser = async (user) => {
  const users = await _readUsers()
  const foundId = users.find(u => {
    return u.email === user.email && u.password === user.password
  })
  console.log(foundId)
  if (foundId) {
    return true
  }
  return false
}

module.exports = { _findUser }