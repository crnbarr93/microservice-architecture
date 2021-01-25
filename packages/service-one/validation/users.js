const { body } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "updateUser":
    case "createUser": {
      return [
        body("name", "Name field is required").exists(),
        body("email", "Invalid email").exists().isEmail(),
      ];
    }
  }
};
