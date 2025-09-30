const path = require('path')
const CustomAPIError = require('../errors/custom-error')

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
  if (foundId) {
    return true
  }
  return false
}

const _updateUser = async (user) => {
  const users = await _readUsers()
  // validate no duplicate email
  if (users.find(u => {
    return u.email === user.email
  })) {
    throw new CustomAPIError('Duplicated email', 400)
  }

  // update
  const newUsers = [...users, user]
  await writeFile(url, JSON.stringify(newUsers, null, 2))
}

module.exports = { _findUser, _updateUser }