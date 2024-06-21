const client = require('./client');
const util = require('util');

// get all articles
async function getAllArticles() {
    try {
        const { rows } = await client.query(`
        SELECT * FROM articles;
        `);
        return rows;
    } catch (error) {
        throw error;
    }
}

// get article by id
async function getArticleById(id) {
    try {
        const { rows: [article] } = await client.query(`
        SELECT * FROM articles
        WHERE id = $1;
        `, [id]);
        return article;
    } catch (error) {
        throw error;
    }
}

// create SEED article - includes title, description, content, and author_id by default
async function createSeedArticle({ title, description, content, author_id }) {
    try {
        const { rows: [article] } = await client.query(`
        INSERT INTO articles(title, description, content, author_id)
        VALUES($1, $2, $3, $4)
        RETURNING *;
        `, [title, description, content, author_id]);
        return article;
    } catch (error) {
        throw error;
    }
}
async function userlogin({ title, description }) {
    try {
        const { rows: [article] } = await client.query(`
        INSERT INTO bought(title, description)
        VALUES($1, $2)
        RETURNING *;
        `, [title, description]);
        return article;
    } catch (error) {
        throw error;
    }
}

// create article - includes title, description, and content in body - author is current logged in user id
async function createArticles(body, author_id) {
    try {
        const { rows: [article] } = await client.query(`
        INSERT INTO articles(title, description, content, author_id)
        VALUES($1, $2, $3, $4)
        RETURNING *;
        `, [body.title, body.description, body.content, author_id]);
        return article;
    } catch (error) {
        throw error;
    }
}

// update article - includes title, description, and content in body - editor is current logged in user id
async function updateArticleById(article_id, fields = {}) {
    console.log(fields);
    // build the set string
    const setString = Object.keys(fields)
        .map((key, index) => `"${key}"=$${index + 1}`)
        .join(', ');

    // return early if this is called without fields
    if (setString.length === 0) {
        return;
    }
console.log(setString);
    try {
            // update any fields that need to be updated
              await client.query(`
                UPDATE articles
                SET ${ setString }
                WHERE id=${ article_id }
                RETURNING *;
              `, Object.values(fields));
              return await getArticleById(article_id);
    } catch (error) {
        throw error;
    }
}

// delete article
async function deleteArticleById(id) {
    try {
        const { rows: [article] } = await client.query(`
        DELETE FROM articles
        WHERE id = $1
        RETURNING *;
        `, [id]);
        return article;
    } catch (error) {
        throw error;
    }
}

// export modules
module.exports = {
    getAllArticles,
    getArticleById,
    createSeedArticle,
    createArticles,
    updateArticleById,
    deleteArticleById,
    userlogin
}
