'use strict'

const time = require('./time'),
  premises = require('./premises'),
  premisesXTime = {}

premisesXTime[time[0]] = []
premisesXTime[time[0]].push(premises[3])
premisesXTime[time[0]].push(premises[1])

premisesXTime[time[1]] = []
premisesXTime[time[1]].push(premises[3])
premisesXTime[time[1]].push(premises[2])
premisesXTime[time[1]].push(premises[1])

module.exports = premisesXTime
