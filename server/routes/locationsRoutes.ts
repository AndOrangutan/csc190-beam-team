import express from 'express';

import {
  createLocation,
  getLocations,
  deleteLocations,
  updateLocation,
} from '../controllers/locationsControllers';

const router = express.Router();

router
  .route('/')
  .get(getLocations)
  .post(createLocation)
  .delete(deleteLocations)
  .put(updateLocation);

module.exports = router;
