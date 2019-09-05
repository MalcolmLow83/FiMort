module.exports = (db) => {

    let getAllRefRates = (request, response) => {
        console.log(db)
        db.ref_rates.allRefRates((error,ref_rates) => {
            if (error) {
                console.error('error getting ref_rates', error);
                response.status(500);
                response.send('server error');
            } else {
                if (ref_rates === null) {
                    response.status(404);
                    response.send('not found');
                } else {
                    response.send({ref_rates:ref_rates});
                }
            }
        });
    }

    return {
        getAllRefRates : getAllRefRates
    }

};