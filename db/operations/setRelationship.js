const dbBase = require('../objects/objects')

module.exports = function(params, base) {
  base[params[0][0]][dbBase[params[0][0]][params[0][1]]]
  .push(dbBase[params[1][0]][params[1][1]])
}
