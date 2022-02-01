const dogs = [
  { name: 'Bankai', age: 3 },
  { name: 'Floquinho', age: 5 }
]
const p = document.querySelector('p')
function makeGreen() {
  p.style.color = '#baFaba'
  p.style.fontSize = '40px'
}

// regular
console.log('Hello, Im a normal print console')

// Interpolated
console.log('Hello, I can put a %s string', '<3')

// Styled
/* Here we can use css attribute in console, it's not so important, but it can be useful */
console.log('%c Im a stylized text', 'font-size: 20px; background-color: blue')

// Warning!
console.warn('Im a warning text')

// Error
console.error('Im a error text')

// Info
console.info('Im a info text')

// testing
console.assert(1 == 2, 'If wrong, this text will appear')

// clear
//this clear the console
console.clear()

// View DOM ELEMENTS
console.log(p)
console.dir(p)

console.clear()

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`this is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age * 7} dog years old`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('arroz')
console.count('feijao')
console.count('arroz')
console.count('feijao')
console.count('arroz')
console.count('feijao')
console.count('arroz')
console.count('arroz')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/CleberSalustiano')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data')
    console.log(data)
  })

console.table(dogs)
