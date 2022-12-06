import connectionToDB from '../../../db/dbConnection';
import User from '../../../schema/registerSchema';

async function handler(req, res) {
  await connectionToDB();

  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    if (!name && !email && !password) {
      res.status(400).send('Each field must be required!');
    }
    // check existing user
    const existUser = await User.findOne(email);
    if (existUser) {
      res.status(403).send('User already exist!');
    }
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      message: 'Registered successfully!',
    });
  }
}

export default handler;
