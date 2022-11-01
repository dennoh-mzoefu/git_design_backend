const Chat = require("../models/chat.js");
const Notification = require("../models/chat.js");
// const { validateChats } = require("../helpers/validation.js");

// controller functions
const chatSave = async (req, res) => {
  const chat = new Chat(req.body);
  try {
    const savedChat = await chat.save();
    res.send(savedChat);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllChats = async (req, res) => {
  const { room } = req.body;
  try {
    const chats = await Chat.find({ room: room });
    res.json(chats);
  } catch (error) {
    res.send(error);
  }
};

// controller functions
const createNotification = async (req, res) => {
  const notification = new Notification(req.body);
  try {
    const savedNotification = await notification.save();
    res.send(savedNotification);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getNotificationReceiver = async (req, res) => {
  const { receiver } = req.body;
  try {
    const notification = await Notification.find({ receiver: receiver });
    res.json(notification);
  } catch (error) {
    res.send(error);
  }
};
const getNotificationSender = async (req, res) => {
  const { sender } = req.body;
  try {
    const notification = await Notification.find({ sender: sender });
    res.json(notification);
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  chatSave,
  getAllChats,
  getNotificationSender,
  getNotificationReceiver,
  createNotification,
};