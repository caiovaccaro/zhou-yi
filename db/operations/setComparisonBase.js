const dbBase = require('../objects/objects')

module.exports = function() {
  const paramXPremises = {},
    paramXChallenges = {},
    paramXTime = {},
    paramComparison = {}

  paramXPremises[dbBase.premises[0]] = []
  paramXPremises[dbBase.premises[1]] = []
  paramXPremises[dbBase.premises[2]] = []
  paramXPremises[dbBase.premises[3]] = []

  paramXChallenges[dbBase.challenges[0]] = []
  paramXChallenges[dbBase.challenges[1]] = []
  paramXChallenges[dbBase.challenges[2]] = []
  paramXChallenges[dbBase.challenges[3]] = []
  paramXChallenges[dbBase.challenges[4]] = []

  paramXTime[dbBase.time[0]] = []
  paramXTime[dbBase.time[1]] = []
  
  return {
    premises: paramXPremises,
    challenges: paramXChallenges,
    time: paramXTime
  }
}
