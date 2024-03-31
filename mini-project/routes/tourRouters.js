const express = require('express')
const { getAllTours, createTour, updateTour, getSingleTour, deleteTour } = require('../controllers/tourController')

const router = express.Router()

router.route('/').get(getAllTours).post(createTour)

router.route('/:id').patch(updateTour).get(getSingleTour).delete(deleteTour)

module.exports = router