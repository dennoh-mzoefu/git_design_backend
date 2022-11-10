const User = require("../models/user.js");
const bcrypt = require("bcrypt");
// const { validateUsers } = require("../helpers/validation.js");

// controller functions
const register = async (req, res) => {
  const { name, email, description, password, profilePic } = req.body;
  const emailExists = await User.findOne({ email: email });
  if (emailExists)
    return res.status(400).json({ message: "email already exists" });
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    name,
    email,
    description,
    password: hashedPassword,
    profilePic,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
};
const getOneUser = async (req, res) => {
  const { name } = req.params;
  try {
    const user = await User.findOne({ name: name });
    if (!user) return res.status(400).send("no user with the username");
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send(error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).send("email does not exist");
  //password comparison
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("invalid password");
  res.send(user);
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, description, password } = req.body;

  const user = await User.findOne({ _id: id });

  if (!user) return res.status(404).send(`No user with id: ${id}`);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const updatedUser = {
    name,
    email,
    description,
    password: hashedPassword,
    _id: id,
  };

  await User.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};

module.exports = {
  register,
  login,
  getOneUser,
  getAllUsers,
  updateUser,
};
