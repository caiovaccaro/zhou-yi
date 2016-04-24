'use strict'

const bases = ['premises', 'challenges', 'time'],
  comparisons = ['concepts', 'apis', 'frameworks'],
  basesQuestions = [
    "Which of the following questions corresponds to your team's biggest concerns?",
    "What are your project's biggest challenges?",
    "What is the timespan of your project (development time + online time)?"
  ],
  basesInputTypes = ['checkbox', 'checkbox', 'radio'],
  objects = {}

bases.forEach(dynamicRequire)
comparisons.forEach(dynamicRequire)

function dynamicRequire(file) {
  objects[file] = require('./' + file)
}

objects.bases = bases
objects.comparisons = comparisons
objects.basesQuestions = basesQuestions
objects.basesInputTypes = basesInputTypes

module.exports = objects
