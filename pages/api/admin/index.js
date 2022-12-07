function handler(req, res) {
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'admin123';

  if (req.method === 'POST') {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send('Provide your email and password!');
    }
    if (email === adminEmail && password === adminPassword) {
      res.status(200).json({
        success: true,
      });
    }
  }
}

export default handler;
