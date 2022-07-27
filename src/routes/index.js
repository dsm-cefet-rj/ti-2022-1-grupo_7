const router = require('express').Router();

const boxSlice = require('../components/Redux/boxSlice');
const LoginSlice = require('../components/services/login.service');

router.post('/login', loginController.login);

router.get('/box', carsController.index);
