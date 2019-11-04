//mengimport semua usersnya
var express = require('express')
var router = express.Router()

const users = require("./users")

router.use('/users', users)

module.exports = router