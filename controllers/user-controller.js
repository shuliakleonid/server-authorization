class UserController {
  async registration(req, res, next) {
    try {

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
