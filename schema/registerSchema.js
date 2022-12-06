// external imports
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 3,
  },

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
  // profile: {
  //   type: String,
  //   required: true,
  // },
  password: {
    type: String,
    min: 6,
    required: true,
    trim: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});
// hashing password
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});
// generate token
userSchema.methods.generateToken = async function () {
  try {
    let generateToken = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    this.tokens = this.tokens.concat({ token: generateToken });
    await this.save();
    return generateToken;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.models.user || mongoose.model('user', userSchema);

export default User;
