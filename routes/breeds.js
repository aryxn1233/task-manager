const express = require('express');
const {
  getBreeds,
  getBreed,
  syncBreeds,
} = require('../controllers/breeds');

const router = express.Router();

router.route('/').get(getBreeds);


router.route('/:id').get(getBreed);


router.route('/sync').post(syncBreeds);

module.exports = router;
