const express = require('express');
const router = express.Router();

// import DB functions
const {getAllbought, getArticleById, createBought, updateBoughtById, deleteArticleById} = require('../db');

// import utils
const {requireUser} = require('./utils');

// GET /api/articles - PUBLIC
router.get('/', requireUser, async (req, res, next) => {
    try {
        const articles = await getAllbought();
        res.send(articles);
    } catch (error) {
        next(error);
    }
});

// GET /api/articles/:id - PUBLIC
router.get('/:id',requireUser, async (req, res, next) => {
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
        const article = await createBought(req.body, req.user.id);
        res.send(article);
    } catch (error) {
        next(error);
    }
});

// PATCH /api/articles/:id - PRIVATE
router.patch('/:id', requireUser, async (req, res, next) => {
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
        const article = await deleteBoughtById(req.params.id);
        res.send(article);
    } catch (error) {
        next(error);
    }
});

module.exports = router;

