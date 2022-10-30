import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  passwordHash: {
    type: String,
    require: true,
  },
}, { timestamps: true })

export default mongoose.model('User', userSchema)