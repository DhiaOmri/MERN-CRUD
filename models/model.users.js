const { mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    Email: String,
    Firstname: String,
    Lastname: String,
    Age: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", UserSchema);
