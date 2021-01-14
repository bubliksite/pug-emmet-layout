const button = document.querySelector('#openProfileMenu')
const dropdown = document.querySelector('#profileMenu')

button.onclick = function (evt) {
  evt.preventDefault()
  dropdown.classList.toggle('d-none')
}
