const express = require('express');
const router = express.Router();

// import DB functions
const {getAllArticles, getArticleById, createArticle, updateArticleById, deleteArticleById} = require('../db');

// import utils
const {requireUser} = require('./utils');

// GET /api/articles - PUBLIC
router.get('/', async (req, res, next) => {
    try {
        const articles = await getAllArticles();
        res.send(articles);
    } catch (error) {
        next(error);
    }
});

// GET /api/articles/:id - PUBLIC
router.get('/:id', async (req, res, next) => {
    try {
        const article = await getArticleById(req.params.id);
        res.send(article);
    } catch (error) {
        next(error);
    }
});

// POST /api/articles - PRIVATE
router.post('/', requireUser, async (req, res, next) => {
    try {
        const article = await createArticle(req.body, req.user.id);
        res.send(article);
    } catch (error) {
        next(error);
    }
});

// PATCH /api/articles/:id - PRIVATE
router.patch('/:id', requireUser, async (req, res, next) => {
    console.log(req.params);
    try {
        const article = await updateArticleById(req.params.id, req.body, req.user.id);
        res.send(article);
    } catch (error) {
        next(error);
    }
});

// DELETE /api/articles/:id - PRIVATE
router.delete('/:id', requireUser, async (req, res, next) => {
    try {
        const article = await deleteArticleById(req.params.id);
        res.send(article);
    } catch (error) {
        next(error);
    }
});

module.exports = router;

