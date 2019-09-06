module.exports = (app, db) => {

  const banks = require('./controllers/banks')(db);
  const ref_rates = require('./controllers/ref_rates')(db);
  const packages = require('./controllers/packages')(db);
  app.get('/banks', banks.getAllBanks);
  app.get('/ref_rates', ref_rates.getAllRefRates);
  app.get('/packages', packages.getAllPackages);

};