'use strict'
// let fs = require('fs')
let ini = require('ini')
// let path = require('path')
// console.log('__dirname', __filename)
// console.log("path.join(__dirname, '.env')", path.join(__dirname, '.env'))
// fs.readFileSync(path.join(__dirname, '.env')
let config = ini.parse('VUE_APP_BASE_API=http://localhost:8000', 'utf-8')

export default config
