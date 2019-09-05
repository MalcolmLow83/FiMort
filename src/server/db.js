const pg = require('pg');
const pokemon = require('./models/pokemon');

const banks = require('./models/banks');
const ref_rates = require('./models/ref_rates');
const packages = require('./models/packages');

const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  configs = {
    user: 'malcolmlow',
    host: '127.0.0.1',
    database: 'fimort',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

module.exports = {
  /*
   * ADD APP MODELS HERE
   */
  pokemon: pokemon(pool),
  banks: banks(pool),
  ref_rates: ref_rates(pool),
  packages: packages(pool),
  //make queries directly from here
  queryInterface: (text, params, callback) => {
    return pool.query(text, params, callback);
  },

  // get a reference to end the connection pool at server end
  pool:pool
};