/* Get Our Elements */
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
  /*same thing, but with knowledge about video settings  
 if (video.paused) {
    video.play()
  } else {
    video.pause()
  }*/
}

function updateButton() {
  const icon = this.paused ? '>' : '||'
  toggle.textContent = icon
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
  console.log(this.name)
  console.log(this.value)
}

/* Hook up the event listers */
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click'), skip)
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
