'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const {restaurant} = require('./restaurantEntity');
const resCtrl = require('./restaurantController');

router.post('/add', (req, res) => {
    resCtrl.addRestaurant(req, res);
});

router.get('/', function(req, res) {
    resCtrl.viewRestaurant(req, res);
});

router.patch('/update/:id', (req, res) => {
    resCtrl.updateRestaurant(req, res);
});

router.delete('/delete/:id', (req, res) => {
    resCtrl.deleteRestaurant(req, res);
});


module.exports = router;
