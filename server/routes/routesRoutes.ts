import express from 'express';

import { createRoute, getRoutes, deleteRoute, updateRoute } from '../controllers/routesControllers';

const router = express.Router();

router.route('/')
    .get(getRoutes)
    .post(createRoute)
    .delete(deleteRoute)
    .put(updateRoute);

module.exports = router;
