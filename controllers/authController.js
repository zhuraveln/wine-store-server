import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import User from '../models/user.js'
import Cart from '../models/cart.js'

// Sign Up
export const signUp = async (req, res) => {
  try {

    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const docCart = new Cart()
    const newCart = await docCart.save()

    const docUser = new User({
      name: req.body.name,
      passwordHash: hash,
      cart: newCart._id
    })
    const user = await docUser.save()

    const token = jwt.sign({
      id: user._id,
    }, 'secretkey', { expiresIn: '7d' })

    const { _id, name, cart } = user._doc

    res.json({
      _id,
      name,
      token,
      cart
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Failed to Sign up'
    })
  }
}

// Sign In
export const signIn = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name })

    if (!user) {
      return res.status(404).json({
        message: 'Wrong login or password'
      })
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user._doc.passwordHash)

    if (!isValidPassword) {
      return res.status(400).json({
        message: 'Wrong login or password'
      })
    }

    const token = jwt.sign({
      id: user._id,
    }, 'secretkey', { expiresIn: '7d' })

    const { _id, name, cart } = user._doc

    res.json({
      _id,
      name,
      token,
      cart
    })

  } catch (error) {
    console.log(error)
    res.status(400).json({
      message: 'Failed to Sign in'
    })
  }
}

// Auth Me
export const authMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId)

    if (!user) {
      res.status(404).json({
        message: 'User is not found'
      })
    }

    const { _id, name, cart } = user._doc

    res.status(200).json({ _id, name, cart })

  } catch (error) {
    console.log(error)
    res.status(403).json({
      message: 'No access'
    })
  }
}