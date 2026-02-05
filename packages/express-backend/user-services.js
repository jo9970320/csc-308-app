import mongoose from "mongoose";
import userModel from "./user.js";

mongoose.set("debug", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/users")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("MongoDB connection error:", error));

function getUsers(name, job) {
  if (!name && !job) {
    return userModel.find();
  }
  if (name && !job) {
    return findUserByName(name);
  }
  if (job && !name) {
    return findUserByJob(job);
  }
  return userModel.find({ name, job });
}


function findUserById(id) {
  return userModel.findById(id);
}

function addUser(user) {
  const userToAdd = new userModel(user);
  const promise = userToAdd.save();
  return promise;
}

function findUserByName(name) {
  return userModel.find({ name: name });
}

function findUserByJob(job) {
  return userModel.find({ job: job });
}
function deleteUserById(id) {
  return userModel.findByIdAndDelete(id);
}


export default {
  addUser,
  getUsers,
  findUserById,
  findUserByName,
  findUserByJob,
  deleteUserById,
};