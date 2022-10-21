const DesignFile = require("../models/designFile.js");
const ActivityLog = require("../models/activityLog.js");
const Project = require("../models/project.js");
const needle = require("needle");
var fetch = require("isomorphic-fetch");
var fs = require("fs");

// const figmaApiKey = "figd_-5wK1DvxUHrOPQJn0wu6jxnwbDhnbmnG2Yuh8biM";

const needleDownload = (thumbnailUrl) => {
  const path2 = Date.now();
  const path = `../frontend/public/images/thumbnail/${path2}.png`;
  needle.get(thumbnailUrl).pipe(
    fs.createWriteStream(path).on("done", function (err) {
      console.log("Pipe finished!");
    })
  );
  return path2;
};
const createFigmaFile = async function (req, res, next) {
  const {
    figmaId,
    figmaApiKey,
    description,
    fileName,
    projectName,
    ownerName,
    thumbnailUrl,
    lastModified,
  } = req.body;
  const url = thumbnailUrl;
  const pathUrl = needleDownload(thumbnailUrl);
  try {
    const designFile = new DesignFile({
      fileUrl: "FileUrl",
      thumbnailUrl: pathUrl,
      lastModified,
      description,
      fileName,
      projectName,
      figmaId,
      ownerName,
      figmaApiKey,
    });

    const savedDesignFile = await designFile.save();
    try {
      const activityLog = new ActivityLog({
        Subject: req.body.description,
        StartTime: savedDesignFile.date,
        fileName,
        ownerName,
      });
      const activityLogged = await activityLog.save();
      try {
        const project = Project.find({ projectName: projectName });
        const updatedFilenames = project.filenames;
        updatedFilenames.push(fileName);
        const updatedProject = await Project.findByIdAndUpdate(
          project._id,
          { fileNames: updatedFilenames },
          { new: true }
        );
        console.log("updatedProject");
      } catch (error) {
        console.log(error);
      }
      // return res.send(activityLogged);
    } catch (error) {
      return res.send(error);
    }

    return res.send(savedDesignFile);
  } catch (error) {
    return res.send(error);
  }

  // res.json(FileUrl);
};

const getDesignFile = async (req, res) => {
  const { id } = req.params;

  try {
    const designFile = await DesignFile.findById(id);

    res.status(200).json(designFile);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getDesignFiles = async (req, res) => {
  const { ownerName } = req.query;
  try {
    const designFiles = await DesignFile.find({ ownerName: ownerName });

    res.status(200).json(designFiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getProjectDesignFiles = async (req, res) => {
  const { ownerName, projectName } = req.query;
  try {
    const designFiles = await DesignFile.find({
      ownerName: ownerName,
      projectName: projectName,
    });

    res.status(200).json(designFiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateDesignFile = async (req, res) => {
  const { id } = req.params;
  const {
    fileUrl,
    thumbnailUrl,
    lastModified,
    description,
    fileName,
    projectName,
    figmaId,
    ownerName,
    figmaApiKey,
  } = req.body;

  const designFile = await DesignFile.findOne({ _id: id });

  if (!designFile) return res.status(404).send(`No designFile with id: ${id}`);

  const updatedDesignFile = {
    fileUrl,
    thumbnailUrl,
    lastModified,
    description,
    fileName,
    projectName,
    figmaId,
    ownerName,
    figmaApiKey,
  };

  await DesignFile.findByIdAndUpdate(id, updatedDesignFile, { new: true });

  res.json(updatedDesignFile);
};

module.exports = {
  createFigmaFile,
  getDesignFile,
  updateDesignFile,
  getDesignFiles,
  getProjectDesignFiles,
};
