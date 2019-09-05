/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let allPackages = (callback) => {
        dbPoolInstance.query('SELECT * from packages',(error, queryResult) => {
            if (error) {
            // invoke callback function with results after query has executed
            callback(error, null);
            } else {
            // invoke callback function with results after query has executed  
                if( queryResult.rows.length > 0 ){
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let mapRates = (callback) => {
        dbPoolInstance.query('SELECT rate_1 from packages', (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null)
                }
            }
        })
    }
  
    return {
        allPackages,
        mapRates
    };
  };
  