const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inbetween = false
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inbetween = !inbetween
      }

      if (inbetween) {
        checkbox.checked = true
      }
    })
  }

  lastChecked = this
}
