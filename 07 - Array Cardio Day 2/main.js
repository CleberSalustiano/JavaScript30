// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
]

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
for (const element of people) {
  years = 2021 - element.year
  if (years >= 19) {
    console.log('have some person with 19 or older')
    break
  }
}
// Array.prototype.every() // is everyone 19 or older?
i = 0
for (const element of people) {
  years = 2021 - element.year
  if (years < 19) {
    console.log('everyone isnt 19 or older')
    break
  }
  i += 1
}
if (i === people.length) {
  console.log('everyone is with 19 or older')
}

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
for (const element of comments) {
  if ((element.id = 823423)) {
    console.log(element.text)
    break
  }
}

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.log(comments)

for (let i = 0; i < comments.length; i++) {
  const element = comments[i]
  if (element.id == 823423) {
    comments.splice(i, 1)
    break
  }
}
