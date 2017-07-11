

const controller = require('./../controllers/controller.js');

module.exports = app => {
	// app.HTTP_VERB(url, callback);
  app.get('/cars/new', controller.carsNew);

  app.get('/', controller.index)

  app.get('/cars/:id', controller.carId);

  app.get('/cars/edit/:id', controller.editCar);

  app.post('/cars', controller.carPost);

  app.post('/cars/:id', controller.carPostId);

  app.post('/cars/destroy/:id', controller.destroy);
}
