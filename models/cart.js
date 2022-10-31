import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
  items: {
    type: Array,
    default: []
  },
  totalPrice: {
    type: Number,
    default: 0
  },
},)

export default mongoose.model('Cart', cartSchema)