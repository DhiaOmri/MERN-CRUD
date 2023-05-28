const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateUser(data) {
  let errors = {};
  data.Email = !isEmpty(data.Email) ? data.Email : "";
  data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : "";
  data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : "";
  data.Age = !isEmpty(data.Age) ? data.Age : "";

  if (!validator.isEmail(data.Email)) {
    errors.Email = "Format Email invalid";
  }
  if (validator.isEmpty(data.Email)) {
    errors.Email = "required Email";
  }
  if (validator.isEmpty(data.Firstname)) {
    errors.Firstname = "required Firstname";
  }
  if (validator.isEmpty(data.Lastname)) {
    errors.Lastname = "required Lastname";
  }
  if (validator.isEmpty(data.Age)) {
    errors.Age = "required Age";
  }
  return { errors, isValid: isEmpty(errors) };
};
