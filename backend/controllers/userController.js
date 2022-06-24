const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


//@description - Register a new user
//@route - POST /api/users
//@access - Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    //check if user exits
    const userExits = await User.findOne({ email })
    if (userExits) {
        res.status(400)
        throw new Error('User already exits')
    }
    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    //create a new user
    const user = await User.create({
        name,
        email,
        password: hashPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User data')
    }

})

//@description - Authenticate a user
//@route - POST /api/users/login
//@access - Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    //check for email
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            password: user.password,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user credential')
    }
})

//@description - Get user data
//@route - GET /api/users/me
//@access - Private
const getMe = asyncHandler(async (req, res) => {
    const {_id, name, email}= await User.findById(req.user.id)

    res.status(200).json({
        id:_id,
        name,
        email
    })
})


//Generate JWT
const generateToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30D' })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}