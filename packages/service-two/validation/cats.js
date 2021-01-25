const { body } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "updateCat":
    case "createCat": {
      return [
        body("name", "Name field is required").exists(),
        body("type", "Type field is required").exists(),
      ];
    }
  }
};
