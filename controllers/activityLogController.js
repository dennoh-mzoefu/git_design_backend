const ActivityLog = require("../models/activityLog.js");
// const getDesignFiles = require("./designFileController.js");
const getActivityLogs = async (req, res) => {
  try {
    // call getall designFile controller and filter all apart from desscription and date
    const activityLog = await ActivityLog.find();
    res.send(activityLog);
  } catch (error) {
    res.send(error);
  }
};
const saveActivityLog = async (req, res) => {
  try {
    const activityLog = new ActivityLog({
      Subject: req.body.description,
      StartTime: req.body.startTime,
      fileName: req.body.fileName,
      ownerName: req.body.ownerName,
    });
    const activityLogged = await activityLog.save();
    return res.send(activityLogged);
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  getActivityLogs,
  saveActivityLog,
};
