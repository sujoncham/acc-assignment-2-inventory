const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour.controllers')

router.route('/')
.get(tourController.getTour)
.post(tourController.createTour);

router.route('/:id').patch(tourController.updateTour)


module.exports = router;