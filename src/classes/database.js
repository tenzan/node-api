const config = require('../../knexfile');


try {
  require('fs').unlinkSync(config.connection.filename);
} catch (e) {}

const Knex = require('knex')(config);
const Bookshelf = require('bookshelf')(Knex);

module.exports = Bookshelf;
