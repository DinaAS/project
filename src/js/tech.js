//const buttonContainerTech = document.querySelector('.tech__show-all')
const buttonTech = document.querySelector('.tech__button')
const techList = document.querySelector('.tech__wrapper')
const hidenItemsTech = techList.querySelectorAll('._hidden')

buttonTech.addEventListener('click', showAll)

function showAll(event) {
  if (event.target.closest('.tech__button')) {
    buttonTech.classList.toggle('_active')
    for (let i = 0; i < hidenItemsTech.length; i++) {
      let hidenItem = hidenItemsTech[i]
      hidenItem.classList.toggle('_active')
    }
  }
  if (!event.target.closest('.show-all__button')) {
    buttonTech.classList.remove('_active')
    hidenItem.classList.remove('_active')
  }
}
