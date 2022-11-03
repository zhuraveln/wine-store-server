import express from 'express'
import { signUpValidation, signInValidation } from '../validation/auth.js'
import { info, signUp, signIn, authMe } from '../controllers/authController.js'
import checkAuth from '../utils/checkAuth.js'
import handleValidationErrors from '../utils/handleValidationErrors.js'

export const AuthRouter = express.Router()

// Info
AuthRouter.get('/', info)

// Sign Up
AuthRouter.post('/auth/sign-up', signUpValidation, handleValidationErrors, signUp)

// Sign In
AuthRouter.post('/auth/sign-in', signInValidation, handleValidationErrors, signIn)

// Authorization
AuthRouter.get('/auth/me', checkAuth, authMe)