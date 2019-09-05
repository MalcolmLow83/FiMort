module.exports = (app, db) => {

  const pokemon = require('./controllers/pokemon')(db);

  const packages = require('./controllers/packages')(db);
  
  app.get('/packages', packages.getAllPackages);


  app.get('/pokemon/:id', pokemon.get);

  app.get('/api/pokemon/:id', pokemon.apiget);
};
