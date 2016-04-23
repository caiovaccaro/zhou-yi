const comparisons = require('../objects/objects').comparisons,
  comparisonsObjects = {}

  comparisons.forEach((comparison) => {
    comparisonsObjects[comparison + 'Comparison'] = require('./' + comparison + 'Comparison')
  })

module.exports = comparisonsObjects
