const color = document.querySelector('#base-color')
const spacing = document.querySelector('#spacing')
const blur = document.querySelector('#blur')
const image = document.querySelector('img')
const JS = document.querySelector('h1 span')

function setImage() {
  image.setAttribute(
    'style',
    `padding: ${spacing.value}px;
    background-color: ${color.value};
    filter: blur(${blur.value}px);`
  )
}

color.addEventListener('input', function () {
  setImage()
  JS.setAttribute('style', `color: ${color.value}`)
})

spacing.addEventListener('input', function () {
  setImage()
})

blur.addEventListener('input', function () {
  setImage()
})
