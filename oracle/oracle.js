'use strict'

const _ = require('lodash'),
  dbBase = require('../db/objects/objects')

module.exports = {
  whatIsBestForMultiples: whatIsBestForMultiples
}

function whatIsBestForMultiples(request, db) {
  let params = [],
    response = {},
    results

  for (let param in request) {
    params.push({ param: param, index: request[param] })
  }

  results = whatIsBestForAll(params, db)

  iterateComparisons((comparison, capitalComparison) => {
    response[capitalComparison] = combineMultiples(capitalComparison, results)
  })

  return response
}

function combineMultiples(param, results) {
  return _.reduce(results[param], (sum, result) => {
    return combineOne([sum, result])
  })
}

function combineOne(results) {
  let intersection = _.intersection.apply(null, results),
    concat = _.concat.apply(null, results)

  return intersection.length ? intersection : _.compact(concat)
}

function whatIsBestForAll(params, db) {
  let response = {},
    paramsLength = params.length,
    i

  for(i = 0; i < paramsLength; i++) {
    let bestFor = params[i].index instanceof Array ?
                    whatIsBestForMultipleIndexes(params[i].param, params[i].index, db) :
                    whatIsBestFor(params[i].param, params[i].index, db)

    iterateComparisons((comparison, capitalComparison) => {
      response[capitalComparison] = response[capitalComparison] || []
      response[capitalComparison].push(bestFor[capitalComparison])
    })
  }

  iterateComparisons((comparison, capitalComparison) => {
    response[capitalComparison] = combineOne(response[capitalComparison])
  })

  return response
}

function whatIsBestForMultipleIndexes(param, indexes, db) {
  let response = {},
    indexesLength = indexes.length,
    i

  for(i = 0; i < indexesLength; i++) {
    let bestFor = whatIsBestFor(param, indexes[i], db)

    iterateComparisons((comparison, capitalComparison) => {
      response[capitalComparison] = response[capitalComparison] || []
      response[capitalComparison].push(bestFor[capitalComparison])
    })
  }

  return response
}

function whatIsBestFor(param, index, db) {
  let response = {}

  iterateComparisons((comparison, capitalComparison) => {
    response[capitalComparison] = index ? db[comparison + "Comparison"][param][db[param][index]] : []
  })

  return response
}

function iterateComparisons(callback) {
  dbBase.comparisons.forEach((comparison) => {
    callback(comparison, capitalizeFirstLetter(comparison))
  })
}

function capitalizeFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}
