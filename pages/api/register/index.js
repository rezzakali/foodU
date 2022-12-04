function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log(data);
  } else {
    console.log('empty');
  }
  res.send('success');
}

export default handler;
