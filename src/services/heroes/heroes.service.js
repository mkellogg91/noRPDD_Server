// Initializes the `heroes` service on path `/heroes`
const { Heroes } = require('./heroes.class');
const hooks = require('./heroes.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/heroes', new Heroes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('heroes');

  service.hooks(hooks);
};
