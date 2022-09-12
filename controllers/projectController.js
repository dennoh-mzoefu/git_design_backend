const Project = require("../models/project.js");

// controller functions
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();

    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const getProject = async (req, res) => {
  const { projectName } = req.params;
  try {
    const project = await Project.findOne({ projectName: projectName });
    if (!project) return res.status(400).send("no such project");
  } catch (error) {
    res.send(error);
  }
};

//   create project

const createProject = async (req, res) => {
  const { projectName, description, fileNames, projectMembers } = req.body;

  const newProject = new Project({
    projectName,
    description,
    fileNames,
    projectMembers,
  });

  try {
    await newProject.save();

    res.status(201).json(newProject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

//update project

const updateProject = async (req, res) => {
  const { id } = req.params;
  const { projectName, description, fileNames, projectMembers } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No project with id: ${id}`);

  const updatedProject = {
    projectName,
    description,
    fileNames,
    projectMembers,
  };

  await Project.findByIdAndUpdate(id, updatedProject, { new: true });

  res.json(updatedProject);
};

//delete project

const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No project with id: ${id}`);

  await Project.findByIdAndRemove(id);

  res.json({ message: "project deleted successfully." });
};

// export
module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
