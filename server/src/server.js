import express from 'express';
import articles from '../routes/articles.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1/blogger', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database');
});
const app = express();
app.use(express.json());

app.use('/articles', articles);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});