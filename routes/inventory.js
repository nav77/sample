const express = require('express');
const passport = require('passport');
const router = express.Router();
const userModel = require('../models/usermodel');

router.get('/login', (req, res) => {
    console.log('inside login router');
    res.render('login', { title: 'Projects', userName: 'Navya' })
})

router.post('/login',passport.authenticate,(req,res)=>{
    res.send("hello passport");
})

router.post('/add',async (req, res) => {
    const user = new userModel({
        name: req.body.name,
        password:req.body.password,
        email:req.body.email
    })
    await user.save((err, doc) => {
        if (err) {
            res.status(401).json({ msg: "err"+err })
        } else {

            res.status(200).json({msg:doc});
        }
    })


})

module.exports = router;

