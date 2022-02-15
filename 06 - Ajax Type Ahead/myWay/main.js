const promise = fetch(
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
)

let citiesStates = new Array()

promise
  .then(response => {
    return response.json()
  })
  .then(data => {
    for (const element of data) {
      citiesStates.push(element.city + ', ' + element.state)
    }
  })

console.log(citiesStates)

let arrayTest = ['arroz', 'feijao']

const input = document.querySelector('.search')
const ul = document.querySelector('ul')

input.addEventListener('input', function () {
  const regex = new RegExp(input.value, 'gi')
  ul.innerHTML = ''
  for (const element of citiesStates) {
    if (element.match(regex) != null) {
      ul.innerHTML += `<li>${element}</li>`
    }
  }
})
