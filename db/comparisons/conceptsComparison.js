'use strict'

const setComparisonBase = require('../operations/setComparisonBase'),
  setRelationship = require('../operations/setRelationship'),
  comparisonBase = setComparisonBase()

setRelationship([['premises', 0], ['concepts', 0]], comparisonBase)
setRelationship([['premises', 1], ['concepts', 1]], comparisonBase)
setRelationship([['premises', 2], ['concepts', 1]], comparisonBase)
setRelationship([['premises', 3], ['concepts', 0]], comparisonBase)
setRelationship([['premises', 3], ['concepts', 1]], comparisonBase)

setRelationship([['challenges', 0], ['concepts', 0]], comparisonBase)
setRelationship([['challenges', 0], ['concepts', 1]], comparisonBase)
setRelationship([['challenges', 1], ['concepts', 1]], comparisonBase)
setRelationship([['challenges', 2], ['concepts', 0]], comparisonBase)
setRelationship([['challenges', 2], ['concepts', 1]], comparisonBase)
setRelationship([['challenges', 3], ['concepts', 1]], comparisonBase)
setRelationship([['challenges', 4], ['concepts', 0]], comparisonBase)
setRelationship([['challenges', 4], ['concepts', 1]], comparisonBase)

setRelationship([['time', 0], ['concepts', 0]], comparisonBase)
setRelationship([['time', 1], ['concepts', 1]], comparisonBase)

module.exports = comparisonBase
