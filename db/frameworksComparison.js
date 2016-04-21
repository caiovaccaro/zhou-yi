'use strict'

const premises = require('./premises'),
  challenges = require('./challenges'),
  time = require('./time'),
  frameworks = require('./frameworks')

const frameworksXPremises = {},
  frameworksXChallenges = {},
  frameworksXTime = {},
  frameworksComparison = {}

frameworksXPremises[premises[0]] = []
frameworksXPremises[premises[1]] = []
frameworksXPremises[premises[2]] = []
frameworksXPremises[premises[3]] = []

frameworksXChallenges[challenges[0]] = []
frameworksXChallenges[challenges[1]] = []
frameworksXChallenges[challenges[2]] = []
frameworksXChallenges[challenges[3]] = []
frameworksXChallenges[challenges[4]] = []

frameworksXTime[time[0]] = []
frameworksXTime[time[1]] = []

frameworksXPremises[premises[0]].push(frameworks[1])
frameworksXPremises[premises[0]].push(frameworks[2])
frameworksXPremises[premises[1]].push(frameworks[1])
frameworksXPremises[premises[1]].push(frameworks[2])
frameworksXPremises[premises[1]].push(frameworks[3])
frameworksXPremises[premises[2]].push(frameworks[2])
frameworksXPremises[premises[2]].push(frameworks[2])
frameworksXPremises[premises[2]].push(frameworks[3])
frameworksXPremises[premises[3]].push(frameworks[1])
frameworksXPremises[premises[3]].push(frameworks[3])

frameworksXChallenges[challenges[0]].push(frameworks[1])
frameworksXChallenges[challenges[1]].push(frameworks[1])
frameworksXChallenges[challenges[1]].push(frameworks[3])
frameworksXChallenges[challenges[2]].push(frameworks[1])
frameworksXChallenges[challenges[2]].push(frameworks[3])

frameworksXTime[time[0]].push(frameworks[1])
frameworksXTime[time[0]].push(frameworks[2])
frameworksXTime[time[1]].push(frameworks[0])
frameworksXTime[time[1]].push(frameworks[3])

frameworksComparison.premises = frameworksXPremises
frameworksComparison.challenges = frameworksXChallenges
frameworksComparison.time = frameworksXTime

module.exports = frameworksComparison
