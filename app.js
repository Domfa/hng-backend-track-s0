const express = require('express');
const app = express();

const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  const response = {
    email: 'jjoshuadomfa@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/Domfa/hng-backend-track-s0.git',
  };
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`app is listening on port: ${port}`);
});
