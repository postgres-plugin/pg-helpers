'use strict';

/**
* Execute a postgres query
**/
var escape = require('pg-escape');

module.exports = function (query, pool, cb) {
  var escapedQuery = escape(query);

  pool.connect(function (poolError, client, done) {
    if (poolError) {
      return cb(poolError, null);
    }

    return client.query(escapedQuery, function (error, response) {
      var result = null;

      if (error) {
        done();

        return cb(error, null);
      }

      result = response && response.rows;
      done();

      return cb(null, result);
    });
  });
};
