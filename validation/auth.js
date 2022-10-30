import { body } from 'express-validator'

export const signUpValidation = [
  body('name', 'Incorrect Name').isLength({ min: 3, max: 20 }),
  body('password', 'Min 5 symbols in Password').isLength({ min: 3, max: 25 }),
]

export const signInValidation = [
  body('name', 'Incorrect Name').isLength({ min: 3, max: 20 }),
  body('password', 'Min 5 symbols in Password').isLength({ min: 3, max: 25 }),
]