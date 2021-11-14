const router = require('express').Router();
const path = require('path');

// HTML Routes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public/notes.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './develop/public.notes.html'));
});

module.exports = router;