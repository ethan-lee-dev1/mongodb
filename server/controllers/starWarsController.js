/* eslint-disable quotes */
const models = require("../models/starWarsModels");

// const { Person } = require("../models/starWarsModels");

const starWarsController = {};

starWarsController.getCharacters = async (req, res, next) => {
  try {
    const characters = await models.Person.find({});
    console.log(characters);
    res.locals = characters;
    // res.send(characterArray);
  } catch (err) {
    next(err);
  }
};

starWarsController.getSpecies = (req, res, next) => {
  // write code here

  next();
};

starWarsController.getHomeworld = (req, res, next) => {
  // write code here

  next();
};

starWarsController.getFilm = (req, res, next) => {
  // write code here

  next();
};

starWarsController.addCharacter = (req, res, next) => {
  // write code here

  next();
};

module.exports = starWarsController;
