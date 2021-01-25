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
    case "likeCat": {
      return [
        body("catId", "Cat ID field is required and must be an integer")
          .exists()
          .isInt(),
      ];
    }
  }
};
