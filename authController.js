const User = require('./models/User');
const Role = require('./models/Role');
class authController {
  async registartion(req, res) {
    try {

    } catch (error) {
      console.log(error);
    }
  };
  async login(req, res) {
    try {

    } catch (error) {
      console.log(error);
    }
  };
  async getUsers(req, res) {
    try {
      // // temporary workaround to create roles: start
      // const userRole = new Role(); // defaults to {value: "USER"}
      // const adminRole = new Role({ value: "ADMIN" });
      // await userRole.save();
      // await adminRole.save();
      // // temporary workaround to create roles: end

      res.json('server works');
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = new authController();