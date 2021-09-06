//const firstName = document.querySelector('label[for="firstname"]')
// const firstNameLabel = document.querySelector('#firstname-label')
// const firstNameInput = document.querySelector('#firstname')

// const lastNameLabel = document.querySelector('#lastname-label')
// const lastNameInput = document.querySelector('#lastname')

// const emailLabel = document.querySelector('#email-label')
// const emailInput = document.querySelector('#email')

// const passwordLabel = document.querySelector('#password-label')
// const passwordInput = document.querySelector('#password')

const validateForm = (e) => {
  e.preventDefault()
  console.log('validating')

}


//firstNameInput.oninvalid = invalid

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

