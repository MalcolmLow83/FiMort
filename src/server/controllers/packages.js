module.exports = (db) => {
  
    let getAllPackages = (request, response) => {
        // use pokemon model method `get` to retrieve pokemon data
        // console.log( db );
        db.packages.allPackages((error, packages) => { //model side
          // queryResult contains pokemon data returned from the pokemon model
          if (error) {
            console.error('error getting packages', error);
            response.status(500);
            response.send('server error');
          } else {
            if ( packages === null ){
              // render pokemon view in the pokemon folder
              response.status(404);
              response.send('not found');
            } else {
              // render pokemon view in the pokemon folder
              response.send({ packages: packages }); //App
            }
          }
        });
    };

    let getRates1 = (request, response) => {
      // console.log(db);
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
            response.send({rates1:rates1})
          }
        }
      })
    }

    let getRates2 = (request, response) => {
      // console.log(db);
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
            response.send({rates2:rates2})
          }
        }
      })
    }

    let getRates3 = (request, response) => {
      // console.log(db);
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
            response.send({rates3:rates3})
          }
        }
      })
    }

    return {
      //route : top
      getAllPackages : getAllPackages,
      getRates1 : getRates1,
      getRates2 : getRates2,
      getRates3 : getRates3
    }
  
  };
  