import bcrypt from 'bcrypt';
import cookie from 'cookie';
import connectionToDB from '../../../db/dbConnection';
import User from '../../../schema/registerSchema';

async function handler(req, res) {
  await connectionToDB();
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send('Provide your email and password!');
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        res.status(404).send('Invalid credential');
      }
      // check password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        res.status(404).send('Password mismatched!');
      }
      // set cookie
      const token = await user.generateToken();
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('jwt', token, {
          expires: new Date(Date.now() + 86400000),
          httpOnly: true,
          secure: true,
        })
      );
      res.status(200).json({
        success: true,
        token,
      });
    } catch (err) {
      res.status(500).send('There was a server side error!');
      console.log(err);
    }
  }
}

export default handler;
