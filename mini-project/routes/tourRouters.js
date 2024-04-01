const express = require('express')
const tourController = require('../controllers/tourController')

const router = express.Router()

router.param('id', tourController.CheckID)

router.route('/').get(tourController.getAllTours).post(tourController.checkBody, tourController.createTour)

router.route('/:id').patch(tourController.updateTour).get(tourController.getSingleTour).delete(tourController.deleteTour)

module.exports = router