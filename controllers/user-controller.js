const userService = require('../service/user-service')

class UserController {
  async registration(req, res, next) {
    try {
      const {email, password} = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly:true})

      return res.json(userData)
    } catch (e) {
      console.error(e)
    }
  }

  async login(req, res, next) {
    try {

    } catch (e) {
      console.error(e)
    }
  }

  async logout(req, res, next) {
    try {

    } catch (e) {
      console.error(e)
    }
  }

  async activate(req, res, next) {
    try {

    } catch (e) {
      console.error(e)
    }
  }

  async refresh(req, res, next) {
    try {

    } catch (e) {
      console.error(e)
    }
  }

  async getUsers(req, res, next) {
    try {
      res.json(['3213', '1321', '3123'])
    } catch (e) {
      console.error(e)
    }
  }
}

module.exports = new UserController();
