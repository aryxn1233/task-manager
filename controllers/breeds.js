const Breed = require('../models/Breed');
const fetch = require('node-fetch');

// @desc    Sync dog breeds from external API
// @route   POST /api/breeds/sync
// @access  Public
exports.syncBreeds = async (req, res, next) => {
  try {
    // Fetch breeds from Dog API
    const response = await fetch('https://api.thedogapi.com/v1/breeds');
    const breeds = await response.json();

    // Clear existing breeds
    await Breed.deleteMany({});

    // Transform and save new breeds
    const breedData = breeds.map(breed => ({
      name: breed.name,
      description: breed.description || '',
      origin: breed.origin || '',
      temperament: breed.temperament || '',
      life_span: breed.life_span || '',
      weight: breed.weight?.metric || '',
      height: breed.height?.metric || '',
      image: breed.image?.url || '',
    }));

    const savedBreeds = await Breed.insertMany(breedData);

    res.status(200).json({
      success: true,
      count: savedBreeds.length,
      data: savedBreeds,
    });
  } catch (error) {
    console.error('Error syncing breeds:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to sync breeds',
    });
  }
};

// @desc    Get all breeds
// @route   GET /api/breeds
// @access  Public
exports.getBreeds = async (req, res, next) => {
  try {
    const breeds = await Breed.find();

    res.status(200).json({
      success: true,
      count: breeds.length,
      data: breeds,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Get single breed
// @route   GET /api/breeds/:id
// @access  Public
exports.getBreed = async (req, res, next) => {
  try {
    const breed = await Breed.findById(req.params.id);

    if (!breed) {
      return res.status(404).json({ success: false, error: 'No breed found' });
    }

    res.status(200).json({ success: true, data: breed });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
