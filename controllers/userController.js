const User = require('../models/User');

const getUsers = async (req, res, next) => {
    try {
        const result = await User.find(); 

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    } catch (error) {
        throw new Error(`Error getting all users: ${error.message}`)
    }
}

const createUser = async (req, res, next) => {
    try {
        console.log(req.body)
        const result = await User.create(req.body)
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(result)
    } catch (error) {
        throw new Error(`Error creating a user: ${error.message}`)
    }
}

// const deleteUsers = async (req, res, next) => {

// }

// const getUser = async (req, res, next) => {

// }

module.exports = {
    getUsers, 
    createUser
}