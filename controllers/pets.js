const model = require('../model');
let Pet = model.Pet;

var fn_pets = async (ctx, netx) => {
    var pets  = await Pet.findAll();
    ctx.response.type = 'application/json';
    ctx.response.body = pets;
}

module.exports = {
    'GET /pets' : fn_pets 
}