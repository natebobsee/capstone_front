const client = require('./client');
const util = require('util');

// get all articles
async function getAllbought() {
    try {
        const { rows } = await client.query(`
        SELECT * FROM bought;
        `);
        return rows;
    } catch (error) {
        throw error;
    }
}




// create SEED article - includes title, description, content, and author_id by default
async function createSeedBought({ title, description }) {
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
async function createBought(body, author_id) {
    try {
        const { rows: [article] } = await client.query(`
        INSERT INTO bought(title, description)
        VALUES($1, $2)
        RETURNING *;
        `, [body.title, body.description]);
        return article;
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
async function updateBoughtById(article_id, fields = {}) {
    // build the set string
    const setString = Object.keys(fields)
        .map((key, index) => `"${key}"=$${index + 1}`)
        .join(', ');

    // return early if this is called without fields
    if (setString.length === 0) {
        return;
    }

    try {
  
    } catch (error) {
        throw error;
    }
}

// export modules
module.exports = {
    getAllbought,
    createBought,
    updateBoughtById,
    deleteArticleById,
    createSeedBought
}
