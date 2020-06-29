const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');

const User = require('../../models/User');

//@route GET api/auth
//@desc Test route
//@acces Public
router.get('/', auth, async(req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
        
    }   catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route    POST api/auth
//@desc     Authenticate user & get token
//@access  Public
router.post(
    '/', 
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required' ).exists()
    ],

    async(req, res) => {
        const errors = validationResult(req);      //to get data here, watch chap3 User API
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()}); 
        }

        const { email, password } = req.body;

        try{
            //chap3: user registration, See if user exists
            let user = await User.findOne({ email });    //using async = use await

            if(!user){
                return res
                .status(400)
                .json({errors: [{ msg:'Invalid Credentials.' }] });
            }
            
            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){ 
                return res
                .status(400)
                .json({errors: [{ msg:'Invalid Credentials.' }] });
            }

            
            //return jsonwebtoken, chap3 implementing jwt
            const payload = {
                user:{
                    id: user.id,
                }
            }

            jwt.sign(payload, config.get('jwtSecret'),
            {expiresIn: 360000},
            (err, token) => {
                if(err)throw err;
                    if(typeof user.userLevel !== "number") {
                        res.json({token});
                    } else {
                        res.json({token, userLevel: user.userLevel});
                    }
                }
            );

        }   catch(err){
            console.error(err.message);
            res.status(500).send('Server error');
        }
        
});

module.exports = router;