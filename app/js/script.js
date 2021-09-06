const validateForm = (e) => {
  e.preventDefault()
  console.log('Backend Validating form')
}

function invalid(event) {
  event.preventDefault()

  let labelGrab = `#${event.currentTarget.labels[0].id}`
  let currentLabel = document.querySelector(labelGrab)
  currentLabel.removeAttribute('hidden');

  let iconGrab = `#${event.currentTarget.id}`
  let currentIcon = document.querySelector(`${iconGrab}-icon`)
  currentIcon.removeAttribute('hidden')

  event.currentTarget.classList.add('error')
}

function valid(event) {
  event.preventDefault()

  let labelGrab = `#${event.currentTarget.labels[0].id}`
  let currentLabel = document.querySelector(labelGrab)
  currentLabel.setAttribute('hidden', '');

  let iconGrab = `#${event.currentTarget.id}`
  let currentIcon = document.querySelector(`${iconGrab}-icon`)
  currentIcon.setAttribute('hidden', '')

  event.currentTarget.classList.remove('error')
}

