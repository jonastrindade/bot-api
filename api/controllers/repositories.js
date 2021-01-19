module.exports = () => {
  const repositoriesDB = require('../data/repositories.json');
  const controller = {};

  controller.listRepositories = (req, res) => res.status(200).json(repositoriesDB);

  return controller;
}