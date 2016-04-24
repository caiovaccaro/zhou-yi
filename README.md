# zhou-yi

http://zhou-yi.herokuapp.com/

"The core of the I Ching is a Western Zhou divination text called the Changes of Zhou (周易 Zhōu yì).[3] Various modern scholars suggest dates ranging between the 10th and 4th centuries BC for the assembly of the text in approximately its current form."

"The I Ching, also known as the Classic of Changes or Book of Changes in English, is an ancient divination text and the oldest of the Chinese classics. Possessing a history of more than two and a half millennia of commentary and interpretation, the I Ching is an influential text read throughout the world, providing inspiration to the worlds of religion, psychoanalysis, business, literature, and art."

## What is this?
The name, referring to I-Ching is just a joke. The material to this repo came when [I](http://caiovaccaro.com) was preparing for one of my latest presentations (Client-side Development in 2016 -- link to come). One of the presentation's goals is to **compare 3 main things that concerns us (Web Developers) today: Programming Paradigms or Concepts; APIs formats and Frameworks.**

Little by little, I started drawing some comparison tables, which now [you can see here](http://zhou-yi.herokuapp.com/tables).

After getting those tables in place for my presentation, a friend (thank you!) -- [Thiago Sciotta](https://github.com/thiagog3) -- suggested that I created a github repo for it, where the user would be able to answer some questions and get the results. My first thought was that it is a very delicate topic to create such a thing so I want to go ahead and say this -> **Disclaimer: All of the data colleted here and the way it is disposed reflects only my own and not important opinion, which I don't state as truth.**

Having said that, I really think that if more people join and contribute to the comparison tables we might get somewhere just a tiny bit useful, that is why I want to tell you how to collaborate. **Everything in this application is flexible: bases of comparison, what is going to be compared and comparisons themselves.**

## How to contribute
The main thing you need to know is that:
- Given bases of comparison
- Objects of comparison
- And relationship between such objects and bases of comparison
- The application will process the results for you

**Example:**
- Base of comparison: Time (short or long)
- Objects of comparison: Concepts (Imperative or Functional)
- Relationship between them: Short-Imperative; Long-Functional

#### What is the magic then?
The thing is, we can have as many bases of comparison as we want (time, challenges, premises, and so forth). The result will always be a cross intersection between all the relationships made. [Check the tables once again](http://zhou-yi.herokuapp.com/tables).

I will improve this documentation with time, but for now this is the most important:

#### Adding something to be compared
- Choose an identifier (eg. apis)
- Open the [db/objects](https://github.com/caiovaccaro/zhou-yi/tree/master/db/objects) folder
- Create a file with the identifier name, and js extension, that looks like this:
```javascript
'use strict'

module.exports = [
  "RPC",
  "REST",
  "GRAPH"
]
```
- Go to the [db/objects/objects.js](https://github.com/caiovaccaro/zhou-yi/blob/master/db/objects/objects.js) file
- Add your object of comparison to the comparison array, that now looks like this:
```javascript
comparisons = ['concepts', 'apis', 'frameworks']
```
- That is it! Your just added something to be compared

#### Adding a base of comparison
- Choose and identifier (eg. time)
- Open the [db/objects](https://github.com/caiovaccaro/zhou-yi/tree/master/db/objects) folder
- Create a file with the identifier name, and js extension, that looks like this:
```javascript
'use strict'

module.exports = [
  "Short term",
  "Long term"
]
```
- Go to the [db/objects/objects.js](https://github.com/caiovaccaro/zhou-yi/blob/master/db/objects/objects.js) file
- Add your base of comparison to the bases array, that now looks like this:
```javascript
const bases = ['premises', 'challenges', 'time']
```
- Add your base question (which will appear to the user) into the basesQuestion array, that now looks like this:
```javascript
const bases = ['premises', 'challenges', 'time'],
  basesQuestions = [
    "Which of the following questions corresponds to your team's biggest concerns?",
    "What are your project's biggest challenges?",
    "What is the timespan of your project (development time + online time)?"
  ]
```
- **Note that the question Index must be the same as the base Index!**
- Add the type of input the user will have to choose (checkbox or radio):
```javascript
const bases = ['premises', 'challenges', 'time'],
  basesQuestions = [
    "Which of the following questions corresponds to your team's biggest concerns?",
    "What are your project's biggest challenges?",
    "What is the timespan of your project (development time + online time)?"
  ],
  basesInputTypes = ['checkbox', 'checkbox', 'radio'],
```
- That is it! You just added your base of comparison

#### Actually comparing
The previous steps were too easy, now let's get some work! To actually compare:
- Open the [db/comparisons/](https://github.com/caiovaccaro/zhou-yi/tree/master/db/comparisons) folder
- Create a file that follows the "#{identifier}Comparison" pattern, where the identifier is of the object of comparison (eg. apisComparison, frameworksComparison)
- The empty template of such file is:
```javascript
'use strict'

const setComparisonBase = require('../operations/setComparisonBase'),
  setRelationship = require('../operations/setRelationship'),
  comparisonBase = setComparisonBase()

// Here is where you will compare

module.exports = comparisonBase
```
- Comparing is actually setting a relationship between what you want to compare, to any base of comparison
- Example:
```javascript
setRelationship([['premises', 0], ['apis', 0]], comparisonBase)
```
- What I'm saying here is that the API with id 0, is good to the premise with id 0
```javascript
// db/objects/apis.js
[
  "RPC", // API with id 0
  "REST",
  "GRAPH"
]
```
```javascript
// db/objects/premises.js
[
  "Not necessary to learn something too complex", // Premise with id 0
  "Modular and reusable parts",
  "Without too much need of refactoring",
  "Good user experience (fast, transitions, feedback, easy to use)"
]
```
- That is it! Check a [full example](https://github.com/caiovaccaro/zhou-yi/blob/master/db/comparisons/apisComparison.js)

### How it works?
This section will grow with time. Basically speaking, and intersection of all the relationships is made based on the user selection.

