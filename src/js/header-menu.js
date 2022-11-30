const headerMenu = document.querySelector('.header__menu')
const closeButton = document.querySelector('.menu__close-button')
const burgerButton = document.querySelector('.header__burger-button')
const menuItems = document.querySelectorAll('.menu__item-link')
const langButton = document.querySelectorAll('.lang__button')
const chatButton = document.querySelector('.button__chat')
const chatModal = document.querySelector('.modal__feedback-chat')
const closeButtonCall = document.querySelector('.button__close-call')
const closeButtonChat = document.querySelector('.button__close-chat')
const callModal = document.querySelector('.modal__feedback-call')
const callButton = document.querySelector('.button__call')

burgerButton.addEventListener('click', showMenu)
closeButton.addEventListener('click', closeMenu)
headerMenu.addEventListener('click', closeMenu)
chatButton.addEventListener('click', showModal)
closeButtonCall.addEventListener('click', closeModal)
closeButtonChat.addEventListener('click', closeModal)
chatModal.addEventListener('click', closeModal)
callButton.addEventListener('click', function (event) {
  callModal.classList.remove('_hidden')
})
callModal.addEventListener('click', closeModal)

headerMenu
  .querySelector('.menu__container')
  .addEventListener('click', function (event) {
    event.stopPropagation()
  })

chatModal
  .querySelector('.modal__container')
  .addEventListener('click', function (event) {
    event.stopPropagation()
  })

callModal
  .querySelector('.modal__container-call')
  .addEventListener('click', function (event) {
    event.stopPropagation()
  })

function showMenu(event) {
  headerMenu.classList.remove('_hidden')
}

function closeMenu(event) {
  headerMenu.classList.add('_hidden')
}

export let activateItems = function (items) {
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function (event) {
      for (let j = 0; j < items.length; j++) {
        items[j].classList.remove('_active')
      }
      event.target.classList.add('_active')
    })
  }
}

function showModal(event) {
  chatModal.classList.remove('_hidden')
}

function closeModal(event) {
  chatModal.classList.add('_hidden')
  callModal.classList.add('_hidden')
}

let langButtonActive = activateItems(langButton)
let menuItemsActive = activateItems(menuItems)
