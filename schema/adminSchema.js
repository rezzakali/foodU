// external imports
import mongoose from 'mongoose';
import validator from 'validator';

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email id');
      }
    },
    trim: true,
  },

  password: {
    type: String,
    min: 6,
    required: true,
    trim: true,
  },
});

const Admin = mongoose.models.admin || mongoose.model('admin', adminSchema);

export default Admin;
