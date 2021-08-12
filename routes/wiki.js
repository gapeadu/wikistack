const express = require('express');
const router = express.Router();

const { addPage } = require('../views');
const { Page } = require('../models/index');

router.get('/', async (req, res, next) =>  {
    try{
    const page = await Page.findAll();
    res.send(page);
    }catch(err){
        next(err);
    }

} )

router.post('/', async (req, res, next) => {
    try{
        res.json(req.body)
    }
    catch(err){
        next(err)
    }
})


router.get('/add', async (req, res) => {
    res.send(addPage());
})



module.exports = router;