module.exports = (db) => {
  
  let packages =[];
  let rates1 = [];
  let rates2 = []; 
  let rates3 = [];
  
  let getAllPackages = (request, response) => {
    // console.log( db );
    db.packages.allPackages((error, packages) => { //model side
      if (error) {
        console.error('error getting packages', error);
        response.status(500);
        response.send('server error');
      } else {
        if ( packages === null ){
          response.status(404);
          response.send('not found');
        } else {
          packages = packages;
          db.packages.allRates1((error, rates1) => {
            if (error) {
              console.error('error getting rates1', error);
              response.status(500);
              response.send('server error');
            } else {
              if (rates1 === null) {
                response.send(404);
                response.send('not found');
              } else {
                rates1 = rates1;
                db.packages.allRates2((error, rates2) => {
                  if (error) {
                    console.error('error getting rates2', error);
                    response.status(500);
                    response.send('server error');
                  } else {
                    if (rates2 === null) {
                      response.send(404);
                      response.send('not found');
                    } else {
                      rates2 = rates2;
                      db.packages.allRates3((error, rates3) => {
                        if (error) {
                          console.error('error getting rates3', error);
                          response.status(500);
                          response.send('server error');
                        } else {
                          if (rates3 === null) {
                            response.send(404);
                            response.send('not found');
                          } else {
                            rates3 = rates3;
                            
                            // calculate Yearly Rates
                            let year1_rates = [];
                            let year2_rates = [];
                            let year3_rates = [];
                            for (i = 0; i < packages.length; i++) {
                              let add1 = rates1[i].rate + packages[i].spread_1;
                              let add2 = rates2[i].rate + packages[i].spread_2;
                              let add3 = rates3[i].rate + packages[i].spread_3;
                              year1_rates.push(add1.toFixed(2));
                              year2_rates.push(add2.toFixed(2));
                              year3_rates.push(add3.toFixed(2));
                            }

                            // data format to list component
                            let rates = [];
                            for (j = 0; j < packages.length; j++) {
                              rates.push ({
                                name: packages[j].name, 
                                year1_rate: year1_rates[j],
                                year2_rate: year2_rates[j],
                                year3_rate: year3_rates[j]
                              })
                            }
                            response.send({ //App
                              packages: packages,
                              year1_rates: year1_rates,
                              year2_rates: year2_rates,
                              year3_rates: year3_rates,
                              rates: rates
                            }); 
                          }
                        }
                      })
                    }
                  }
                })
              }
            }
          })
        }
      }
    })
  };

  return {
    //route : top
    getAllPackages : getAllPackages
  }
  
};
  