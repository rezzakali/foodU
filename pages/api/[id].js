import users from '../../Data/users';

export default function handler(req, res) {
  const { id } = req.query;
  const user = users.find((user) => user.id === parseInt(id));
  res.json(user);
}
