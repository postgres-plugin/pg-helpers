'use strict';

/**
* Execute a postgres query
**/

module.exports = function (query, pool, cb) {
  pool.connect(function (poolError, client, done) {
    if (poolError) {
      return cb(poolError, null);
    }

    return client.query(query, function (error, response) {
      done();

      return cb(error, response);
    });
  });
};
