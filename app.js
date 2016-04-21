(function() {
  'use strict'

  // Bases of comparison:
  let premises = [
    "Não ter que aprender algo demasiadamente específico",
    "Partes reutilizáveis e modulares",
    "Sem muita necessidade de refatoração",
    "Boa experiência para o usuário (rápido, transições, feedback, fácil de usar)"
  ]

  let time = [
    "Curto prazo",
    "Longo prazo"
  ]

  let premisesXTime = {}

  premisesXTime[time[0]] = []
  premisesXTime[time[0]].push(premises[3])
  premisesXTime[time[0]].push(premises[1])

  premisesXTime[time[1]] = []
  premisesXTime[time[1]].push(premises[3])
  premisesXTime[time[1]].push(premises[2])
  premisesXTime[time[1]].push(premises[1])

  let challenges = [
    "Sincronia de dados entre servidor e cliente/cache",
    "Performance",
    "Fácil de desenvolver/dar manutenção",
    "Concorrência e Paralelismo",
    "Offline"
  ]

  // Things to compare with:
  let concepts = [
    "Imperativo",
    "Funcional"
  ],
  apis = [
    "RPC",
    "REST",
    "GRAPH"
  ],
  frameworks = [
    "Angular 1.x",
    "React",
    "Polymer",
    "Cycle"
  ]

  let conceptsXPremises = {},
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

  console.log("Concepts comparison: ", conceptsComparison)

  let apisXPremises = {},
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

  console.log("APIs comparison: ", apisComparison)

  let frameworksXPremises = {},
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

  console.log("Frameworks comparison: ", frameworksComparison)
})()
