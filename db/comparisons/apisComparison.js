'use strict'

const setComparisonBase = require('../operations/setComparisonBase'),
  setRelationship = require('../operations/setRelationship'),
  comparisonBase = setComparisonBase()

setRelationship([['premises', 0], ['apis', 0]], comparisonBase)
setRelationship([['premises', 1], ['apis', 1]], comparisonBase)
setRelationship([['premises', 1], ['apis', 2]], comparisonBase)
setRelationship([['premises', 2], ['apis', 2]], comparisonBase)
setRelationship([['premises', 3], ['apis', 2]], comparisonBase)

setRelationship([['challenges', 0], ['apis', 0]], comparisonBase)
setRelationship([['challenges', 0], ['apis', 1]], comparisonBase)
setRelationship([['challenges', 1], ['apis', 2]], comparisonBase)
setRelationship([['challenges', 2], ['apis', 0]], comparisonBase)
setRelationship([['challenges', 2], ['apis', 2]], comparisonBase)
setRelationship([['challenges', 3], ['apis', 2]], comparisonBase)

setRelationship([['time', 0], ['apis', 0]], comparisonBase)
setRelationship([['time', 1], ['apis', 2]], comparisonBase)

module.exports = comparisonBase
