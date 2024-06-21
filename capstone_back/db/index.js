module.exports = {
  // ...require('./client'), // adds key/values from users.js
  ...require('./users'), // adds key/values from users.js
  ...require('./articles'), // adds key/values from articles.js
  ...require('./bought'), // adds key/values from articles.js
}