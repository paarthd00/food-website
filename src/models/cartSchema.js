import mongoose from 'mongoose';
const { Schema } = mongoose;

const cartSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  description: String,
  price:   Number,
  quantity: Number
});

export default cartSchema