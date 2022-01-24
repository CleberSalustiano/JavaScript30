const body = document.querySelector('body')
const stick = document.querySelector('#stick audio')
const hihat = document.querySelector('#hihat audio')
const kick = document.querySelector('#kick audio')
const openhat = document.querySelector('#openhat audio')
const boom = document.querySelector('#boom audio')
const ride = document.querySelector('#ride audio')
const snare = document.querySelector('#snare audio')
const tom = document.querySelector('#tom audio')
const crash = document.querySelector('#crash audio')

body.addEventListener('keydown', function (event) {
  switch (event.code) {
    case 'KeyA':
      stick.play()
      const drumStick = document.querySelector('#stick')
      drumStick.classList.add('press')
      setTimeout(() => {
        drumStick.classList.remove('press')
      }, 300)
      break

    case 'KeyS':
      hihat.play()
      const drumHihat = document.querySelector('#hihat')
      drumHihat.classList.add('press')
      setTimeout(() => {
        drumHihat.classList.remove('press')
      }, 300)
      break

    case 'KeyD':
      kick.play()
      const drumKick = document.querySelector('#kick')
      drumKick.classList.add('press')
      setTimeout(() => {
        drumKick.classList.remove('press')
      }, 300)
      break

    case 'KeyF':
      openhat.play()
      const drumOpenHat = document.querySelector('#openhat')
      drumOpenHat.classList.add('press')
      setTimeout(() => {
        drumOpenHat.classList.remove('press')
      }, 300)
      break

    case 'KeyG':
      boom.play()
      const drumBoom = document.querySelector('#boom')
      drumBoom.classList.add('press')
      setTimeout(() => {
        drumBoom.classList.remove('press')
      }, 300)
      break

    case 'KeyH':
      ride.play()
      const drumRide = document.querySelector('#ride')
      drumRide.classList.add('press')
      setTimeout(() => {
        drumRide.classList.remove('press')
      }, 300)
      break

    case 'KeyJ':
      snare.play()
      const drumSnare = document.querySelector('#snare')
      drumSnare.classList.add('press')
      setTimeout(() => {
        drumSnare.classList.remove('press')
      }, 300)
      break

    case 'KeyK':
      tom.play()
      const drumTom = document.querySelector('#tom')
      drumTom.classList.add('press')
      setTimeout(() => {
        drumTom.classList.remove('press')
      }, 300)
      break

    case 'KeyL':
      crash.play()
      const drumCrash = document.querySelector('#crash')
      drumCrash.classList.add('press')
      setTimeout(() => {
        drumCrash.classList.remove('press')
      }, 300)
      break

    default:
      break
  }
})
