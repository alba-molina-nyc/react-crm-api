// Require dependencies
const express = require('express');
const Contact = require('../models/contact');
// Create router object
const router = express.Router();

// Define routes/controllers

// Index Route
router.get('/', async (req, res) => {
    try {
        res.json(await Contact.find({}));
    } catch (error) {
        res.status(401).json({message: 'Please login to see contacts'});
    }
});

// Create Route
router.post('/', async (req, res) => {
    try {
        res.json(await Contact.create(req.body));
    } catch (error) {
        res.status(401).json({message: 'Please login to create a contact'});
    }
});

// Export the router object
module.exports = router;