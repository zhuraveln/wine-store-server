import express from 'express'
import * as CartController from '../controllers/cartController.js'

export const CartRouter = express.Router()

// Get User Cart
CartRouter.post('/cart/get', CartController.getCart)

// Upload User Cart
CartRouter.post('/cart/upload', CartController.postCart)

// Upload User Cart item
CartRouter.post('/cart/upload-item', CartController.postCartItem)