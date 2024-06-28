import express from "express";
import Article from "../models/articles.js";

const router = express.Router();

// get List of Articles
router.get("/list-articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.send(articles);
  } catch (error) {
    res.status(500).send;
  }
});

// Add new article
router.post("/new-article", async (req, res) => {
  const newArticle = new Article({
    name: req.body.name,
    title: req.body.title,
    content: req.body.content,
  });
  try {
    const article = await newArticle.save();
    res.status(200).json(article);
  } catch (err) {
    res.status(400);
  }
});

// get specific article
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.send(article);
  } catch (error) {
    res.status(500).send;
  }
});

// add comments in the article
router.put("/:id/comment", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    article.comments.push(req.body.comment);
    const updatedArticle = await article.save();
    res.send(updatedArticle);
  } catch (err) {
    res.status(400);
  }
});

// get comments in the article
router.get("/:id/comment", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.send(article.comments);
  } catch (error) {
    res.status(500).send;
  }
});

// delete comments in the article
router.delete("/:id/comment", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    article.comments.pop();
    const updatedArticle = await article.save();
    res.send(updatedArticle);
  } catch (err) {
    res.status(400);
  }
});

// upvote an article
router.put("/:id/upvote", async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      { $inc: { upvotes: 1 } },
      { new: true }
    );
    res.send(`Upvoted ${article.title} with ${article.upvotes} upvotes`);
  } catch (err) {
    res.status(400);
  }
});

// search for an article
router.get("/search/:name", async (req, res) => {
  try {
    const articles = await Article.find({ name: req.params.name });
    res.send(articles);
  } catch (error) {
    res.status(500).send;
  }
});

// delete articles
router.delete("/:id", async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    res.send(`Deleted ${article.title}`);
  } catch (err) {
    res.status(400);
  }
});

export default router;
