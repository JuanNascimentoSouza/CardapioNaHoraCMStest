const db = require('../config/db');

exports.getAllPosts = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM posts');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO posts (title, content, author) VALUES (?, ?, ?)',
      [title, content, author]
    );
    res.status(201).json({ id: result.insertId, title, content, author });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
