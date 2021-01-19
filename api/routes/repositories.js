module.exports = app => {
  const controller = require('../controllers/repositories')();

  app.route('/api/v1/repositories')
    .get(controller.listRepositories);
}