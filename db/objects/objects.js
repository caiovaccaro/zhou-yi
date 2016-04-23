'use strict'

const bases = ['premises', 'challenges', 'time'],
  comparisons = ['concepts', 'apis', 'frameworks'],
  objects = {}

bases.forEach(dynamicRequire)
comparisons.forEach(dynamicRequire)

function dynamicRequire(file) {
  objects[file] = require('./' + file)
}

objects.bases = bases
objects.comparisons = comparisons

module.exports = objects
