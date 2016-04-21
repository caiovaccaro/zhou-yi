'use strict'

const premises = require('./premises'),
  challenges = require('./challenges'),
  time = require('./time'),
  apis = require('./apis')

const apisXPremises = {},
  apisXChallenges = {},
  apisXTime = {},
  apisComparison = {}

apisXPremises[premises[0]] = []
apisXPremises[premises[1]] = []
apisXPremises[premises[2]] = []
apisXPremises[premises[3]] = []

apisXChallenges[challenges[0]] = []
apisXChallenges[challenges[1]] = []
apisXChallenges[challenges[2]] = []
apisXChallenges[challenges[3]] = []
apisXChallenges[challenges[4]] = []

apisXTime[time[0]] = []
apisXTime[time[1]] = []

apisXPremises[premises[0]].push(apis[0])
apisXPremises[premises[1]].push(apis[1])
apisXPremises[premises[1]].push(apis[2])
apisXPremises[premises[2]].push(apis[2])
apisXPremises[premises[3]].push(apis[2])

apisXChallenges[challenges[0]].push(apis[0])
apisXChallenges[challenges[0]].push(apis[1])
apisXChallenges[challenges[1]].push(apis[2])
apisXChallenges[challenges[2]].push(apis[0])
apisXChallenges[challenges[2]].push(apis[2])
apisXChallenges[challenges[3]].push(apis[2])

apisXTime[time[0]].push(apis[0])
apisXTime[time[1]].push(apis[2])

apisComparison.premises = apisXPremises
apisComparison.challenges = apisXChallenges
apisComparison.time = apisXTime

module.exports = apisComparison
