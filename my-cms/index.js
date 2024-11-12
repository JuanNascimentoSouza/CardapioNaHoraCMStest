const express = require('express');
const app = express();
const postsRouter = require('./routes/posts');
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('CMS Backend is running...');
});

app.use('/api/posts', postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
