import bcrypt from 'bcrypt';
import connectionToDB from '../../../db/dbConnection';
import Admin from '../../../schema/adminSchema';

async function handler(req, res) {
  await connectionToDB();
  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send('Provide your email and password!');
    }
    try {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        res.status(404).send('Invalid credential');
      }
      // check password
      const isValidPassword = await bcrypt.compare(password, admin.password);
      if (!isValidPassword) {
        res.status(404).send('Password mismatched!');
      }

      res.status(200).json({
        success: true,
      });
    } catch (err) {
      res.status(500).send('There was a server side error!');
      console.log(err);
    }
  }
}

export default handler;
