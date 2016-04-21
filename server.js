'use strict'

const app = require('express')(),
  http = require('http').Server(app),
  io = require('socket.io')(http),
  db = require('./db/db'),
  _ = require('lodash'),
  port = process.env.PORT || 3000

app.set('port', port)
app.set('view engine', 'pug')
app.set('views', './client')
app.get('/', (req, res) => { res.render('index', { db: db }) })

http.listen(port, () => { console.log('Up on ' + port) })

io.on('connection', (socket) => {
  socket.on('change', (request) => {
    io.emit('response', whatIsBestForMultipleChallengesAndTime(request.time, request.challenge))
  })
})

function whatIsBestForMultipleChallengesAndTime(timeIndex, challengeIndexes) {
  let results = [],
    indexesLength = challengeIndexes.length ? challengeIndexes.length : 1,
    i

  for (i = 0; i < indexesLength; i++) {
    results.push(whatIsBestForTheTimeAndChallenge(timeIndex[0], challengeIndexes[i]))
  }

  return _.reduce(results, (sum, result) => {
    let conceptsIntersection = _.intersection(sum.Concepts, result.Concepts),
      apisIntersection = _.intersection(sum.APIs, result.APIs),
      frameworksIntersection = _.intersection(sum.Frameworks, result.Frameworks),
      conceptsConcat = _.concat(sum.Concepts, result.Concepts),
      apisConcat = _.concat(sum.APIs, result.APIs),
      frameworksConcat = _.concat(sum.Frameworks, result.Frameworks)

    return {
      "Concepts": conceptsIntersection.length ? conceptsIntersection : _.compact(conceptsConcat),
      "APIs": apisIntersection.length ? apisIntersection : _.compact(apisConcat),
      "Frameworks": frameworksIntersection.length ? frameworksIntersection : _.compact(frameworksConcat)
    }
  })
}

function whatIsBestForTheTimeAndChallenge(timeIndex, challengeIndex) {
  let forTheTime = whatIsBestForTheTime(timeIndex),
    forTheChallenge = whatIsBestForTheChallenge(challengeIndex),
    conceptsTimeAndChallengeIntersection = _.intersection(forTheTime.Concepts, forTheChallenge.Concepts),
    apisTimeAndChallengeIntersection = _.intersection(forTheTime.APIs, forTheChallenge.APIs),
    frameworksTimeAndChallengeIntersection = _.intersection(forTheTime.Frameworks, forTheChallenge.Frameworks),
    conceptsTimeAndChallengeConcat = _.concat(forTheTime.Concepts, forTheChallenge.Concepts),
    apisTimeAndChallengeConcat = _.concat(forTheTime.APIs, forTheChallenge.APIs),
    frameworksTimeAndChallengeConcat = _.concat(forTheTime.Frameworks, forTheChallenge.Frameworks)

    return {
      "Concepts": conceptsTimeAndChallengeIntersection.length ? conceptsTimeAndChallengeIntersection : _.compact(conceptsTimeAndChallengeConcat),
      "APIs": apisTimeAndChallengeIntersection.length ? apisTimeAndChallengeIntersection : _.compact(apisTimeAndChallengeConcat),
      "Frameworks": frameworksTimeAndChallengeIntersection.length ? frameworksTimeAndChallengeIntersection : _.compact(frameworksTimeAndChallengeConcat)
    }
}

function whatIsBestForTheTime(timeIndex) {
  return {
    "Concepts": timeIndex ? db.conceptsComparison.time[db.time[timeIndex]] : [],
    "APIs": timeIndex ? db.apisComparison.time[db.time[timeIndex]] : [],
    "Frameworks": timeIndex ? db.frameworksComparison.time[db.time[timeIndex]] : []
  }
}

function whatIsBestForTheChallenge(challengeIndex) {
  return {
    "Concepts": challengeIndex ? db.conceptsComparison.challenges[db.challenges[challengeIndex]] : [],
    "APIs": challengeIndex ? db.apisComparison.challenges[db.challenges[challengeIndex]] : [],
    "Frameworks": challengeIndex ? db.frameworksComparison.challenges[db.challenges[challengeIndex]] : []
  }
}
