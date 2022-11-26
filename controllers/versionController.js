const Version = require("../models/version.js");

// controller functions
const getVersions = async (req, res) => {
  const { designFile } = req.params;
  try {
    const versions = await Version.find({ designFile: designFile });

    res.status(200).json(versions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getVersion = async (req, res) => {
  const { version } = req.params;
  try {
    const version = await Version.findOne({
      version: version,
    });
    res.status(200).send(version);
  } catch (error) {
    res.send(error);
  }
};

//   create version

const createVersion = async (req, res) => {
  const { version, fileName, designFile } = req.body;

  const newVersion = new Version({
    version,
    fileName,
    designFile,
  });

  try {
    await newVersion.save();

    res.status(201).json(newVersion);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//update version

const updateVersion = async (req, res) => {
  const { id } = req.params;
  const { version, fileName, designFile } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No version with id: ${id}`);

  const updatedVersion = {
    version,
    fileName,
    designFile,
  };

  await Version.findByIdAndUpdate(id, updatedVersion, { new: true });

  res.json(updatedVersion);
};

//delete version

const deleteVersion = async (req, res) => {
  const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id))
  //   return res.status(404).send(`No version with id: ${id}`);

  await Version.findByIdAndRemove(id);

  res.json({ message: "version deleted successfully." });
};

// export
module.exports = {
  getVersions,
  getVersion,
  createVersion,
  updateVersion,
  deleteVersion,
};
