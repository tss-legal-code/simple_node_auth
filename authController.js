const User = require('./models/User');
const Role = require('./models/Role');
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");
class authController {
  async registartion(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Validation errors", errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.status(400).json({ message: "User has already been registered" });
      }
      const passwordSalt = bcrypt.genSaltSync(7);
      const passwordHash = bcrypt.hashSync(password, passwordSalt);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({ username, password: passwordHash, roles: [userRole.value] });
      await user.save();
      return res.json({ message: "User is now sccessfully registered" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Registration error" });
    }
  };
  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (user) {
        return res.status(400).json({ message: "User has already been registered" });
      }
      const isPasswordValid = bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        res.status(400).json({ message: "Wrong password" });
      }
      // JWT ...
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Login error" });
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
      res.status(400).json({ message: "Access users error" });
    }
  };
}

module.exports = new authController();