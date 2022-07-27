const service = require('../services/login.service')

class LoginSlice {
    constructor(loginService){
        this.loginService = loginService
    }

    login = (req, res) => {
        this.loginService
            .authenticate(req.body)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'usuario ou senha invalidaxx '}))
            .catch(console.log); 
    };
}

module.exports = new LoginSlice(service);