const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour.controllers')

router.route("/bulk-update").patch(tourController.bulkUpdateTour);

router.route('/')
.get(tourController.getTour)
.post(tourController.createTour);

router.route('/:id')
.patch(tourController.updateTour)
.delete(tourController.deleteByIdTour);


module.exports = router;