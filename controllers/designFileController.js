// var path = require("path");
const DesignFile = require("../models/designFile.js");
var fetch = require("isomorphic-fetch");

// const figmaApiKey = "figd_-5wK1DvxUHrOPQJn0wu6jxnwbDhnbmnG2Yuh8biM";

const createFigmaFile = async function (req, res, next) {
  const { figmaId, figmaApiKey, description } = req.body;
  var { fileUrl, thumbnail, lastModified } = await getImagesFromFigma(
    figmaId,
    figmaApiKey
  );
  const FileUrl = fileUrl.fileUrl.fileUrl.Cover;

  //   send thumbnail, image and description,lastmodified
  // console.log({ VAR });
  try {
    const designFile = new DesignFile({
      fileUrl: FileUrl,
      thumbnailUrl: thumbnail,
      lastModified,
      description,
    });
    const savedDesignFile = await designFile.save();
    return res.send(savedDesignFile);
  } catch (error) {
    return res.send(error);
  }
  // res.json(FileUrl);
};

async function getImagesFromFigma(figmaId, figmaApiKey) {
  // Nv8nCYDQKjipTrdHHXXsen
  let result = await fetch(`https://api.figma.com/v1/files/${figmaId}`, {
    method: "GET",
    headers: {
      "X-Figma-Token": figmaApiKey,
    },
  });
  let figmaTreeStructure = await result.json();
  console.log("figmaTreeStructure");
  var thumbnail = figmaTreeStructure.thumbnailUrl;
  var lastModified = figmaTreeStructure.lastModified;
  //   return figmaTreeStructure;

  // added code

  let children = figmaTreeStructure.document.children.map((frame) => {
    return {
      name: frame.name,
      id: frame.id,
    };
  });
  let ids = children.map((ethmoji) => ethmoji.id).join(",");

  let imageResult = await fetch(
    `https://api.figma.com/v1/images/${figmaId}?scale=2&ids=${ids}`,
    {
      method: "GET",
      headers: {
        "X-Figma-Token": figmaApiKey,
      },
    }
  );
  let figmaImages = await imageResult.json();
  figmaImages = figmaImages.images;

  return children.reduce(function (map, ethmoji) {
    map[ethmoji.name] = figmaImages[ethmoji.id];
    var fileUrl = map;
    // console.log({ fileUrl });
    return { fileUrl, thumbnail, lastModified };
  }, {});
}
// get design file

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
  try {
    const designFiles = await DesignFile.find();

    res.status(200).json(designFiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createFigmaFile,
  getDesignFile,
  getDesignFiles,
};
