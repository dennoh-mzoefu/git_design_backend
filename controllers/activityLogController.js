// const ActivityLog = require("../models/activityLog.js");
const getDesignFiles = require("./designFileController.js");
const getActivityLog = async (req, res) => {
  try {
    // call getall designFile controller and filter all apart from desscription and date
    const designFiles = await getDesignFiles();
    res.send(designFiles);
  } catch (error) {}
};

module.exports = {
  getActivityLog,
};
