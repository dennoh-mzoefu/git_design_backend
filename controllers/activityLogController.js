const ActivityLog = require("../models/activityLog.js");
// const getDesignFiles = require("./designFileController.js");
const getActivityLog = async (req, res) => {
  try {
    // call getall designFile controller and filter all apart from desscription and date
    const activityLog = await ActivityLog.find();
    res.send(activityLog);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getActivityLog,
};
