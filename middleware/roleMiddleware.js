const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        res.status(401).json({ message: 'User is not authorized' });
      }
      const { roles: userRoles } = jwt.verify(token, secret);
      let hasRole = false;
      userRoles.forEach(role => {
        if (roles.includes(role)) {
          hasRole = true;
        }
      });
      if (!hasRole) {
        res.status(401).json({ message: "Not enough permissions" });
      }
      next();
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
  };
};