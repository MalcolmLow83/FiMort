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

    let getMappings = (request, response) => {
      // console.log(db);
      db.packages.allMappings((error, mappings) => {
        if (error) {
          console.error('error getting mapping', error);
          response.status(500);
          response.send('server error');
        } else {
          if (mappings === null) {
            response.status(404);
            response.send('not found');
          } else {
            response.send({mappings: mappings})
          }
        }
      })
    }

    return {
      //route : top
      getAllPackages : getAllPackages,
      getMappings : getMappings
    }
  
  };
  