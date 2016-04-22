'use strict'

const _ = require('lodash'),
  objects = require('./objects/objects'),
  comparisons = require('./comparisons/comparisons')

module.exports = _.extend(objects, comparisons)
