import express from 'express'

import ItemsController from './controllers/ItemsController'
import PointsController from './controllers/PointsController'

const routes = express.Router()
const itemsController = new ItemsController()
const pointsController = new PointsController()

// index, show, create, update, delete

routes.get('/items', itemsController.index)

routes.get('/points/:id', pointsController.show)
routes.get('/points', pointsController.index)
routes.post('/points', pointsController.create)

export default routes
