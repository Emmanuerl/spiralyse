# Spiralyze

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
