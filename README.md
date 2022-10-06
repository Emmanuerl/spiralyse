# Spiralyze

## Image Gallery

Image Gallery can be found [here](https://spiralyze.herokuapp.com/)

## BACKEND API DOCUMENTATION

Base URl : https://spiralyze.herokuapp.com/

- POST /api/v1/product - create product

```json
{
  "name": "string | required | unique",
  "price": "number | required | positive | min:0"
}
```

- GET /api/v1/products - list all productrs

```
request payload (body)
{}
```

- GET /api/v1/products/{id} - get single product

```
request payload (body)
{}
```

- PUT /api/v1/products/{id} - update product

```json
{
  "name": "string | optional | unique",
  "price": "number | optional | positive | min:0"
}
```

- DELETE /api/v1/products/{id} - delete product

```json
request payload (body)
{}
```

### How to setup locally

```sh
# clone repository
$ git clone <repo_url>

# cd into path
$ cd spiralyze

# setup env config
# this only works in unix shells (sh, bash, git bash, e.t.c)
$ cp .env.example .env

# install dependencies
$ npm install

# terminal 1                        |  terminal 2
#                                   |
# run build in watch mode           |  start server in watch mode
$ npm run watch                     |  $ npm run start:dev
#                                   |
#                                   |
#                                   |
# run build                         |  run server
$ npm run buld                      |  $ npm run start
```
