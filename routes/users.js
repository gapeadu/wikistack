const express = require('express');
const router = express.Router();
const { Users } = require('../models/index') //check back on this
// const { add } = require('../views');

router.get('/', async (req, res, next)  => {
    try{
    const user = await Users.findAll();
    res.send(user);
    } catch (err){
        next(err)
    }

});

// router.post('/', async (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// });

// router.get('/add', async (req, res, next) => {
//     try {
        
//     } catch (error) {
        
//     }
// })



module.exports = router;