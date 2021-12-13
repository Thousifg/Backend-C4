const express = require("express");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken")

const newToken = (user) => {
    return jwt.sign({ user: user }, "thisIsTheSalt");
}


const register = async (req, res) => {
    try {
        // check if he already exists
        const user = await User.findOne({ email: req.body.email }).lean().exec();

        // if yes throw error
        if (user) {
            return res.status(400).json({
                status: "failed",
                message: "User already exists, please provide a new email"
            });
        }

        // else create
        const newUser = await User.create(req.body);

        // create token
        const token = newToken(user);

        // return user and token
        return res.status(201).json({newUser, token})
    }
    catch (e) {
        return res.status(500).send({ message: e.message, status: "Failed" })
    }
}


const login = async(req,res) => {
    
}

module.exports = { register, login };