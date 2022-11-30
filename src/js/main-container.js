import { activateItems } from './header-menu'

const mainItems = document.querySelectorAll('.main__item-link')
const mainText = document.querySelectorAll('.main__text')
const buttonText = document.querySelector('.button__text')

buttonText.addEventListener('click', showText)

function showText(event) {
  if (event.target.closest('.button__text')) {
    buttonText.classList.toggle('_active')
    for (let i = 0; i < mainText.length; i++) {
      mainText[i].classList.toggle('_hidden')
      for (let j = 0; j < mainText.length; j++) {
        mainText[j].classList.toggle('_visible')
      }
    }
  }
}

let mainItemsActive = activateItems(mainItems)
