const swag = require('../models/swag');

function getSwag(req, res){
    res.status(200).send(swag);
}

module.exports = {
    getSwag
}