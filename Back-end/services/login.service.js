const jwt = require('jsonwebtoken')

const bd =[ { username: 'admin', password: 'admin' }]

const authenticate = async ({ username, password }) => {

    const user = bd.find(user => user.password == password && user.username == username)

    if(user) {
        const token = await jwt.sign ({ username }, 'configuracaodasuaaplicacao')

        return {
            token,
            user
        };
    }
};

module.exports = {
    authenticate
}