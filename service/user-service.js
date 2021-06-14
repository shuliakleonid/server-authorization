const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid');
const mailService = require('../service/mail-service')

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({email})
    if (candidate) {
      throw new Error(`User with this email:${email} exist`)
    }
    const hashPassword = await bcrypt.hash(password, 3)
    const activationLink = uuid.v3()
    const user = await UserModel.create({email, password: hashPassword, activationLink})
  }
}

module.exports = new UserService()
