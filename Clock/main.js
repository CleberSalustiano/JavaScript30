const dhour = document.querySelector('#hours')
const dminute = document.querySelector('#minutes')
const dsecond = document.querySelector('#seconds')
let second, minute, hour

function pointer(pointerValue, pointer) {
  pointer.setAttribute('style', `transform: rotate(${pointerValue * 6}deg)`)
}

function pointerHour(pointerValue, pointer) {
  pointer.setAttribute('style', `transform: rotate(${pointerValue * 30}deg)`)
}

setInterval(() => {
  if (second == undefined) {
    second = 45
  }
  if (minute == undefined) {
    minute = 0
  }
  if (hour == undefined) {
    hour = -3
  }

  second = second + 1
  pointer(second, dsecond)
  pointer(minute, dminute)
  pointerHour(hour, dhour)

  if (second == 60) {
    minute += 1
    second = 0
  }

  if (minute == 60) {
    hour += 1
    minute = 0
  }

  if (hour == 12) {
    hour = 0
  }
}, 1000)
