const { User } = require('../models');

const userData = [{
        username: 'Maryia',
        password: 'mm1989'

    },
    {
        username: 'Ernesto',
        password: 'eh1983'
    },
    {
        username: 'Noemi',
        password: 'na1989'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;