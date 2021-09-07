const formSent = document.querySelector('.success')
const validateForm = (e) => {
  e.preventDefault()
  document.getElementById('login-form').reset();
  formSent.insertAdjacentHTML("afterbegin", 'Form sent, Congrats!')
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
  if (formSent.innerHTML) formSent.innerHTML = ''

  let labelGrab = `#${event.currentTarget.labels[0].id}`
  let currentLabel = document.querySelector(labelGrab)
  currentLabel.setAttribute('hidden', '');

  let iconGrab = `#${event.currentTarget.id}`
  let currentIcon = document.querySelector(`${iconGrab}-icon`)
  currentIcon.setAttribute('hidden', '')

  event.currentTarget.classList.remove('error')
}

