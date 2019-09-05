module.exports = (db) => {

    let getAllBanks = (request, response) => {
        // console.log(db)
        db.banks.allBanks((error,banks) => {
            if (error) {
                console.error('error getting banks', error);
                response.status(500);
                response.send('server error');
            } else {
                if (banks === null) {
                    response.status(404);
                    response.send('not found');
                } else {
                    response.send({banks:banks});
                }
            }
        });
    }

    return {
        getAllBanks : getAllBanks
    }

};