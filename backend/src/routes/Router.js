const express = require('express')
const router = express.Router()

const RegisterController = require('../controllers/RegisterController');
const LoginController = require('../controllers/LoginController');

//Cadastro de barbeiros
router.post('/register', RegisterController.newRegister)
router.get('/register', RegisterController.getRegisters)
router.put('/register/:id', RegisterController.updateRegister)

// Login
router.post('/login', LoginController.verifyUser)
module.exports = router