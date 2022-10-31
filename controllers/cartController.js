import Cart from '../models/cart.js'

// Get User Cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ _id: req.body.cart })

    const { items, totalPrice } = cart._doc

    res.json({
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
    const newItems = req.body.items
    const newTotalPrice = req.body.totalPrice

    const cart = await Cart.findOne({ _id: req.body.cart })

    const { items, totalPrice } = cart._doc

    const newCart = await Cart.findOneAndUpdate({ id: cart._id },
      { items: [...items, ...newItems], totalPrice: totalPrice + newTotalPrice },
      { returnDocument: 'after' })

    res.json({
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
