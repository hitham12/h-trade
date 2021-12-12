const express = require('express');
const usersController = require('../controller/users.controller')
const router = express.Router();

router.get('/', (req, res) => {
    usersController.getAllUsers(req, res);
})
router.post('/newuser', (req, res) => {
    usersController.addNewUser(req, res);
})
router.put('/pricecoins2/:id', (req, res) => {
    usersController.updateCoins2(req, res);
})
module.exports = router;