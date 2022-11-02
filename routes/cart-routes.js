import express from 'express'
import { getCart, postCart, postCartItem } from '../controllers/cartController.js'

export const CartRouter = express.Router()

// Get User Cart
CartRouter.post('/cart/get', getCart)

// Upload User Cart
CartRouter.post('/cart/upload', postCart)

// Upload User Cart item
CartRouter.post('/cart/upload-item', postCartItem)