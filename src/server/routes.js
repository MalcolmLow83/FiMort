module.exports = (app, db) => {

  const pokemon = require('./controllers/pokemon')(db);

  const banks = require('./controllers/banks')(db);
  const ref_rates = require('./controllers/ref_rates')(db);
  const packages = require('./controllers/packages')(db);
  // const mappings = require('./controllers/packages')(db);
  
  app.get('/banks', banks.getAllBanks);
  app.get('/ref_rates', ref_rates.getAllRefRates);
  app.get('/packages', packages.getAllPackages);

  // app.get('/mappings', packages.getMappings);

  app.get('/pokemon/:id', pokemon.get);
  app.get('/api/pokemon/:id', pokemon.apiget);
};
