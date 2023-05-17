'use strict'

const { User } = require('../models/User')
const { getAll, getById } = require('../services/userService')

require('dotenv').config()

class UserController { 

	getByIdUser = async (req, res)=>{
		try {

			const user = await getById(req, User)
			return res.json(user)

		} catch (error) {
			console.log(error)
		}
        
	}

	getAllUsers = async (req, res) => {
		try {

			const users =  await getAll(User)
			return res.json(users)
    
		} catch (error) {
			console.log(error)
		}
	}

	login = (req, res) => {
        
	}

	registrationUser = async (req, res) => {
		try {
            
			const {email, password} = req.body
			const emailValid = emailValidator(email)
			const passwordValid = passwordValidator(password)
			if(!emailValid){
				return  res.json('введите корректный email')             
			}
			if(!passwordValid){
				return  res.json('введите корректный пароль')
			}
			const userExists = await User.findOne({where:{email}})
			if(userExists){
				return res.json('пользователь с таким email уже существует')
			}

			const secret = process.env.SECRET_KEY
			const hashPass = ''

			const user = await User.create({email, password: hashPass})

			const userDto = {
				userId: user.id,
				email: user.email,
				role: user.role
			}

			const {refreshToken, accesToken} = generateToken({userDto, hashPass})//придумать генерацию токена
            
			user.createToken({token: refreshToken})

			res.setHeader(
				'Set-cookie',
				cookie.serialize('refreshToken', refreshToken, {
					maxAge: 30 * 24 * 60 * 60 * 1000,
					httpOnly: true,
				})
			)

			res.json({user: userDto, accesToken})

		} catch (error) {
			console.log(error)
		}
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