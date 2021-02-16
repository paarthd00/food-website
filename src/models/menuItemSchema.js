import mongoose from 'mongoose';
const { Schema } = mongoose;

const menuItemSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  description: String,
  price:   Number
});

export default menuItemSchema