const db = require('../db');

module.exports = db.defineModel('user', {
    name: db.STRING(50),
    real_name: db.STRING(100),
    email: db.STRING(50),
    pet_id: db.STRING(50)
});

// insert into user (
// ) valus (
//     1, 'tom', '汤姆', 'tom@gmail.com', 1
// )