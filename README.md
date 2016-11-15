# pg-helpers
A list of helpers to query a Postgres database

## Tests

By default the tests will run with the following configuration for Postgres:
```
{
  user: 'postgres',
  database: 'test',
  password: '',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};
```
You can change this default values by defining the following environment variable in a .env file:
```
PG_USER=user_pg
PG_PASSWORD=the_password
PG_DATABASE=the_db_name
```