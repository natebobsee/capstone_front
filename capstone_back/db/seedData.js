// require in the database adapter functions as you write them (createUser, createActivity...)
const { createUser, createSeedArticle, userlogin, createSeedBought } = require('./');
const client = require('./client');

// drop tables in the correct order
async function dropTables() {
  console.log('Dropping All Tables...');
  // drop all tables, in the correct order
  try {
    await client.query(`
    DROP TABLE IF EXISTS users CASCADE;
    DROP TABLE IF EXISTS articles;
    DROP TABLE IF EXISTS bought;
  `)
  } catch (error) {
    throw error;
  }
}

// create tables in the correct order
async function createTables() {
  try {
    console.log("Starting to build tables...");
    // create all tables, in the correct order
    // create users table
    await client.query(`
      CREATE TABLE users(
        id  SERIAL PRIMARY KEY, 
        username VARCHAR(255) UNIQUE NOT NULL, 
        password VARCHAR(255) NOT NULL
      );
    `)

    // create articles table
    await client.query(`
    CREATE TABLE articles(
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      content TEXT,
      author_id INTEGER NOT NULL
      
    );
  
  
   
  
 
  `);
  await client.query(`
    CREATE TABLE bought(
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
     
      
    );
   `);
    console.log("Finished building tables!");
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

// create initial users
async function createInitialUsers() {
  console.log('Starting to create users...');
  try {

    const usersToCreate = [
      { username: 'user1000', password: 'user1000' },
      { username: 'sandra', password: 'sandra123' },
      { username: 'glamgal', password: 'glamgal123' },
    ]
    const users = await Promise.all(usersToCreate.map(createUser));

    console.log('Users created:');
    console.log(users);
    console.log('Finished creating users!');
  } catch (error) {
    console.error('Error creating users!');
    throw error;
  }
}

// create initial articles
async function createInitialArticles() {
  try {
    console.log('Starting to create articles...');

    // create articles
    const articlesToCreate = [
      {
        title: 'How to make a great first impression',
        description: '10.99 ',
        content: 'Lorem ',
        author_id: 1,
        keywords: ['first impression', 'impressing people', 'making a good first impression']
      },
      {
        title: 'Saving Money on Groceries',
        description: '10.99 ',
        content: 'At ',
        author_id: 1,
        keywords: ['saving money', 'groceries', 'saving money on groceries']
      },
      {
        title: 'Making your Home More Eco-Friendly',
        description: '10.99 ',
        content: 'Sit ',
        author_id: 1,
        keywords: ['eco-friendly', 'green living', 'making your home more eco-friendly']
      },
      {
        title: 'baking made easy',
        description: '10.99 ',
        content: 'Sit ',
        author_id: 1,
        keywords: ['eco-friendly', 'green living', 'making your home more eco-friendly']
      },
      {
        title: 'home decorating',
        description: '10.99 ',
        content: 'Sit ',
        author_id: 1,
        keywords: ['eco-friendly', 'green living', 'making your home more eco-friendly']
      },
    ];
    const articles = await Promise.all(articlesToCreate.map(createSeedArticle));
    console.log('Articles created!');
    console.log('Finished creating articles!');
  } catch (error) {
    console.error('Error creating articles!');
    throw error;
  }
}
async function createInitialBought() {
  try {
    console.log('Starting to create articles...');

    // create articles
    const articlesToCreate = [
      {
        title: 'How to make a great first impression',
        description: 'You only get one chance to make a first impression. Here are some tips to make sure you make the best first impression possible.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author_id: 1,
        keywords: ['first impression', 'impressing people', 'making a good first impression']
      },
    ];
    const articles = await Promise.all(articlesToCreate.map(createSeedBought));
    console.log('Articles created!');
    console.log('Finished creating articles!');
  } catch (error) {
    console.error('Error creating articles!');
    throw error;
  }
}
async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await createInitialUsers();
    await createInitialArticles();
    await createInitialBought();
  } catch (error) {
    console.log('Error during rebuildDB')
    throw error;
  }
}

module.exports = {
  rebuildDB
};
