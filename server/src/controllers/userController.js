const { User } = require("../models/User");
const { getAll } = require("../services/service");

class UserController { 

    getByIdUser = (req, res)=>{
        
    }

    getAllUsers = async (req, res) => {
        try {

            const users =  await getAll(User)
            return res.json(users)
    
        } catch (error) {
            console.log(error);
        }
    }

    login = (req, res) => {
        
    }

    registrationUser = (req, res) => {
        
    }

    removeUser = (req, res) => {
        
    }

    updateUser = (req, res) => {
        
    }

    logout = (req, res) => {
        
    }

    refreshToken = (req, res) => {
        
    }

}

module.exports = new UserController()