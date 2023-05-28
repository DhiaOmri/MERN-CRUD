const Users = require("../models/model.users");
const ValidateUser = require("../validation/Users.validation");
const AddUser = async (req, resp) => {
  //   resp.send("Add Done");
  //   console.log(req.body);

  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      resp.status(404).json(errors);
    } else {
      await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          errors.Email = "Email Exist";
          resp.status(404).json(errors);
        } else {
          await Users.create(req.body);
          resp.status(201).json({ message: "user added with seccess" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const FindAllUser = async (req, resp) => {
  //   resp.send("FindALl Done");
  try {
    const data = await Users.find();
    resp.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const FindSingleUser = async (req, resp) => {
  //   resp.send("FindSingle Done");
  try {
    const data = await Users.findOne({ _id: req.params.id });
    resp.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const UpdateUser = async (req, resp) => {
  //   resp.send("Update Done");
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      resp.status(404).json(errors);
    } else {
      const data = await Users.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      resp.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteUser = async (req, resp) => {
  //   resp.send("Delete Done");

  try {
    const data = await Users.deleteOne({ _id: req.params.id });
    resp.status(201).json({ message: "User deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddUser,
  FindAllUser,
  FindSingleUser,
  UpdateUser,
  DeleteUser,
};
