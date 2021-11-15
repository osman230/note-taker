const router = require('express').Router();
// const express = require('express');
const path = require('path');

//
router.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
    });

router.get('/notes', function(req, res)  {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
    });

    module.exports = router;
