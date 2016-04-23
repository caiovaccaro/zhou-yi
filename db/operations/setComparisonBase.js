const dbBase = require('../objects/objects')

module.exports = function() {
  const comparisonBase = {}

  dbBase.bases.forEach((base) => {
    comparisonBase[base] = comparisonBase[base] || []

    dbBase[base].forEach((item) => {
      comparisonBase[base][item] = []
    })
  })

  return comparisonBase
}
