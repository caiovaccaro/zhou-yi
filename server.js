'use strict'

const express = require('express'),
  app = express(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  db = require('./db/db'),
  oracle = require('./oracle/oracle'),
  _ = require('lodash'),
  port = process.env.PORT || 3000

app.set('port', port)
app.set('view engine', 'pug')
app.set('views', './client')
app.use('/assets', express.static(__dirname + '/client/assets'))
app.get('/', (req, res) => { res.render('index', { db: db }) })
app.get('/tables', (req, res) => { res.render('tables', { db: db }) })

http.listen(port, () => { console.log('Up on ' + port) })

io.on('connection', (socket) => {
  socket.on('change', (request) => {
    socket.emit('response', oracle.whatIsBestForMultiples(request, db))
  })
})
