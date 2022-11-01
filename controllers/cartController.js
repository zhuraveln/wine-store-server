import Cart from '../models/cart.js'

// Get User Cart
export const getCart = async (req, res) => {
  try {
    const cardId = req.body.cart
    const cart = await Cart.findOne({ _id: cardId })

    const { items, totalPrice } = cart._doc

    res.status(200).json({
      items,
      totalPrice
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Failed to Get Cart'
    })
  }
}

// Upload User Cart
export const postCart = async (req, res) => {
  try {
    const cartId = req.body.cart
    const cartItems = req.body.items
    const cartTotalPrice = req.body.totalPrice

    const newCart = await Cart.findOneAndUpdate(
      { _id: cartId },
      {
        $set: { items: cartItems, totalPrice: cartTotalPrice }
      },
      { returnDocument: 'after' }
    )

    res.status(200).json({
      items: newCart._doc.items,
      totalPrice: newCart._doc.totalPrice
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Failed to Upload Cart'
    })
  }
}

// Upload User Cart item
export const postCartItem = async (req, res) => {
  try {
    const cartId = req.body.cart
    const newItem = req.body.item

    await Cart.findOneAndUpdate(
      { _id: cartId },
      {
        $push: { items: newItem },
        $inc: { totalPrice: newItem.price }
      }
    )

    res.status(200).json({
      item: newItem,
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Failed to Upload Cart Item'
    })
  }
}