const buttonContainerBrands = document.querySelector('.brands__show-all')
const buttonShowAllBrands =
  buttonContainerBrands.querySelector('.show-all__button')
const brandsList = document.querySelector('.brands__wrapper')
const hidenItems = brandsList.querySelectorAll('._hidden')

buttonShowAllBrands.addEventListener('click', showAll)

export function showAll(event) {
  if (event.target.closest('.show-all__button')) {
    buttonShowAllBrands.classList.toggle('_active')
    for (let i = 0; i < hidenItems.length; i++) {
      let hidenItem = hidenItems[i]
      hidenItem.classList.toggle('_active')
    }
  }
  if (!event.target.closest('.show-all__button')) {
    buttonShowAllBrands.classList.remove('_active')
    hidenItem.classList.remove('_active')
  }
}
