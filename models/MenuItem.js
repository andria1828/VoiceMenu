const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['category', 'dish'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  price: {
    type: String,
    default: null // კატეგორიებს ფასი არ აქვთ
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);