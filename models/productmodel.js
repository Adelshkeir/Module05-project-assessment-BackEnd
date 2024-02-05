import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  imageURLs: {
    type: [String],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  timestamps: {
    type: Date,
    default: Date.now
  }
});

export default model('Product', productSchema);