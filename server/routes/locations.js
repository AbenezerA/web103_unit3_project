import express from 'express'
import LocationsController from '../controllers/locations.js'

console.log("inside locations router")

const router = express.Router()

router.get('/', LocationsController.getLocations)

router.get('/:locationId', LocationsController.getLocationById)

export default router