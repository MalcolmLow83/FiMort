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

    let allRates1 = (callback) => {
        dbPoolInstance.query('SELECT ref_rates.rate FROM packages INNER JOIN ref_rates ON (ref_rates.id = packages.rate_1)', (error, queryResult) => {
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

    let allRates2 = (callback) => {
        dbPoolInstance.query('SELECT ref_rates.rate FROM packages INNER JOIN ref_rates ON (ref_rates.id = packages.rate_2)', (error, queryResult) => {
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

    let allRates3 = (callback) => {
        dbPoolInstance.query('SELECT ref_rates.rate FROM packages INNER JOIN ref_rates ON (ref_rates.id = packages.rate_3)', (error, queryResult) => {
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
        allRates1,
        allRates2,
        allRates3
    };
  };
  