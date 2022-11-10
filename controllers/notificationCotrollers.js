const Notification = require("../models/notification.js");
const Project = require("../models/project.js");

const getNotifications = async (req, res) => {
  const { receiver } = req.params;
  try {
    // call getall designFile controller and filter all apart from desscription and date
    const notification = await Notification.find({ receiver: receiver });
    res.send(notification);
  } catch (error) {
    res.send(error);
  }
};
const createNotification = async (req, res) => {
  const notification = new Notification(req.body);
  try {
    const savedNotification = await notification.save();
    res.send(savedNotification);
  } catch (error) {
    res.status(400).send(error);
  }
};
const acceptNotifications = async (req, res) => {
  const { _id, receiver, projectName } = req.body;
  try {
    // call getall designFile controller and filter all apart from desscription and date
    const notification = await Notification.deleteOne({ _id: _id });
    const project1 = await Project.findOne({ projectName: projectName });
    project1.projectMembers.push[receiver];
    const project = await Project.updateOne(projectName, project1);
    res.json({ notification, project });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getNotifications,
  createNotification,
  acceptNotifications,
};
