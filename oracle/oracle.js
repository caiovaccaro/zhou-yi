'use strict'

const _ = require('lodash')

module.exports = {
  whatIsBestForMultiples: whatIsBestForMultiples
}

function whatIsBestForMultiples(request, db) {
  let results,
    params = [],
    response = {}

  for (let param in request) {
    params.push({ param: param, index: request[param] })
  }

  results = whatIsBestForAll(params, db)

  return {
    "Concepts": combineMultiples("Concepts", results),
    "APIs": combineMultiples("APIs", results),
    "Frameworks": combineMultiples("Frameworks", results)
  }
}

function combineMultiples(param, results) {
  return _.reduce(results[param], (sum, result) => {
    return combineOne(_.flatten([sum, result]))
  })
}

function combineOne(results) {
  let intersection = _.intersection(results),
    concat = _.concat(results)

  return intersection.length ? intersection : _.compact(concat)
}

function whatIsBestForAll(params, db) {
  let bestConceptsFor = [],
    bestApisFor = [],
    bestFrameworksFor = []

    for(let i = 0; i < params.length; i++) {
      let bestFor = whatIsBestFor(params[i].param, params[i].index, db)

      bestConceptsFor.push(bestFor.Concepts)
      bestApisFor.push(bestFor.APIs)
      bestFrameworksFor.push(bestFor.Frameworks)
    }

    return {
      "Concepts": combineOne(bestConceptsFor),
      "APIs": combineOne(bestApisFor),
      "Frameworks": combineOne(bestFrameworksFor)
    }
}

function whatIsBestFor(param, index, db) {
  return {
    "Concepts": index ? db.conceptsComparison[param][db[param][index]] : [],
    "APIs": index ? db.apisComparison[param][db[param][index]] : [],
    "Frameworks": index ? db.frameworksComparison[param][db[param][index]] : []
  }
}
