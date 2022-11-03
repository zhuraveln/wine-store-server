import { body } from 'express-validator'

export const signUpValidation = [
  body('name', 'Min 3, max 20 symbols in Name').isLength({ min: 3, max: 20 }),
  body('password', 'Min 3, max 25 symbols in Password').isLength({ min: 3, max: 25 }),
]

export const signInValidation = [
  body('name', 'Min 3, max 20 symbols in Name').isLength({ min: 3, max: 20 }),
  body('password', 'Min 3, max 25 symbols in Password').isLength({ min: 3, max: 25 }),
]