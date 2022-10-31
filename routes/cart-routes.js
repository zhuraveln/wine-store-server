import express from 'express'
import * as CartController from '../controllers/cartController.js'

export const CartRouter = express.Router()

// Get User cart
CartRouter.post('/cart/get', CartController.getCart)

// Upload User cart
CartRouter.post('/cart/upload', CartController.postCart)