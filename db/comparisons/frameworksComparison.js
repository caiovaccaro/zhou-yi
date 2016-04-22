'use strict'

const setComparisonBase = require('../operations/setComparisonBase'),
  setRelationship = require('../operations/setRelationship'),
  comparisonBase = setComparisonBase()

setRelationship([['premises', 0], ['frameworks', 1]], comparisonBase)
setRelationship([['premises', 0], ['frameworks', 2]], comparisonBase)
setRelationship([['premises', 1], ['frameworks', 1]], comparisonBase)
setRelationship([['premises', 1], ['frameworks', 2]], comparisonBase)
setRelationship([['premises', 1], ['frameworks', 3]], comparisonBase)
setRelationship([['premises', 2], ['frameworks', 2]], comparisonBase)
setRelationship([['premises', 2], ['frameworks', 3]], comparisonBase)
setRelationship([['premises', 3], ['frameworks', 1]], comparisonBase)
setRelationship([['premises', 3], ['frameworks', 3]], comparisonBase)

setRelationship([['challenges', 0], ['frameworks', 1]], comparisonBase)
setRelationship([['challenges', 1], ['frameworks', 1]], comparisonBase)
setRelationship([['challenges', 1], ['frameworks', 3]], comparisonBase)
setRelationship([['challenges', 2], ['frameworks', 1]], comparisonBase)
setRelationship([['challenges', 2], ['frameworks', 3]], comparisonBase)

setRelationship([['time', 0], ['frameworks', 1]], comparisonBase)
setRelationship([['time', 0], ['frameworks', 2]], comparisonBase)
setRelationship([['time', 1], ['frameworks', 0]], comparisonBase)
setRelationship([['time', 1], ['frameworks', 3]], comparisonBase)

module.exports = comparisonBase
