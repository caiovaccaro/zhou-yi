'use strict'

const premises = require('./premises'),
  challenges = require('./challenges'),
  time = require('./time'),
  concepts = require('./concepts')

const conceptsXPremises = {},
  conceptsXChallenges = {},
  conceptsXTime = {},
  conceptsComparison = {}

conceptsXPremises[premises[0]] = []
conceptsXPremises[premises[1]] = []
conceptsXPremises[premises[2]] = []
conceptsXPremises[premises[3]] = []

conceptsXChallenges[challenges[0]] = []
conceptsXChallenges[challenges[1]] = []
conceptsXChallenges[challenges[2]] = []
conceptsXChallenges[challenges[3]] = []
conceptsXChallenges[challenges[4]] = []

conceptsXTime[time[0]] = []
conceptsXTime[time[1]] = []

conceptsXPremises[premises[0]].push(concepts[0])
conceptsXPremises[premises[1]].push(concepts[1])
conceptsXPremises[premises[2]].push(concepts[1])
conceptsXPremises[premises[3]].push(concepts[0])
conceptsXPremises[premises[3]].push(concepts[1])

conceptsXChallenges[challenges[0]].push(concepts[0])
conceptsXChallenges[challenges[0]].push(concepts[1])
conceptsXChallenges[challenges[1]].push(concepts[1])
conceptsXChallenges[challenges[2]].push(concepts[0])
conceptsXChallenges[challenges[2]].push(concepts[1])
conceptsXChallenges[challenges[3]].push(concepts[1])
conceptsXChallenges[challenges[4]].push(concepts[0])
conceptsXChallenges[challenges[4]].push(concepts[1])

conceptsXTime[time[0]].push(concepts[0])
conceptsXTime[time[1]].push(concepts[1])

conceptsComparison.premises = conceptsXPremises
conceptsComparison.challenges = conceptsXChallenges
conceptsComparison.time = conceptsXTime

module.exports = conceptsComparison
