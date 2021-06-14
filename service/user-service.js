const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid');
const mailService = require('../service/mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')


class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({email}) // user data
    if (candidate) { // check email exist
      throw new Error(`User with this email:${email} exist`)
    }
    const hashPassword = await bcrypt.hash(password, 3); // hash password
    const activationLink = uuid.v4();

    const user = await UserModel.create({email, password: hashPassword, activationLink});
    await mailService.sendActivationMail(email,`${process.env.API_URL}/api/activate/${activationLink}`); // save user in DB

    const userDto = new UserDto(user); // send (id,email,isActivated) with activation letter
    const tokens = tokenService.generateTokens({...userDto}); // generate tokens
    await tokenService.saveToken(userDto.id, tokens.refreshToken);// send token to mongoDB

    return {...tokens, users: userDto} // return information about user and token
  }
}

module.exports = new UserService()
