import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

const brandsContainer = document.querySelector('.brands__container')
const brandsWrapper = document.querySelector('.brands__wrapper')
const brandsItems = document.querySelectorAll('.brands__item')

const techContainer = document.querySelector('.tech__container')
const techWrapper = document.querySelector('.tech__wrapper')
const techItems = document.querySelectorAll('.tech__item')

const priceContainer = document.querySelector('.price__container')
const priceWrapper = document.querySelector('.price__wrapper')
const priceItems = document.querySelectorAll('.price__item')

let mySwiperForBrands
let mySwiperForTech
let mySwiperForPrice

function mobileSliderForBrands() {
  if (window.innerWidth < 768 && brandsContainer.dataset.mobile) {
    brandsContainer.classList.add('swiper')
    brandsWrapper.classList.add('swiper-wrapper')
    for (let i = 0; i < brandsItems.length; i++) {
      brandsItems[i].classList.add('swiper-slide')
    }
    mySwiperForBrands = new Swiper(brandsContainer, {
      slidesPerView: 'auto',
      spaceBetween: 16,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    brandsContainer.dataset.mobile === 'true'
  }
  if (window.innerWidth >= 768) {
    brandsContainer.dataset.mobile === 'false'
    brandsContainer.classList.remove('swiper')
    brandsWrapper.classList.remove('swiper-wrapper')
    for (let i = 0; i < brandsItems.length; i++) {
      brandsItems[i].classList.remove('swiper-slide')
    }
    if (brandsContainer.classList.contains('swiper-container-initialized')) {
      mySwiperForBrands.destroy()
    }
  }
}

function mobileSliderForTech() {
  if (window.innerWidth < 768 && techContainer.dataset.mobile) {
    techContainer.classList.add('swiper')
    techWrapper.classList.add('swiper-wrapper')
    for (let i = 0; i < techItems.length; i++) {
      techItems[i].classList.add('swiper-slide')
    }
    mySwiperForTech = new Swiper(techContainer, {
      slidesPerView: 'auto',
      spaceBetween: 16,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    techContainer.dataset.mobile === 'true'
  }
  if (window.innerWidth >= 768) {
    techContainer.dataset.mobile === 'false'
    techContainer.classList.remove('swiper')
    techWrapper.classList.remove('swiper-wrapper')
    for (let i = 0; i < techItems.length; i++) {
      techItems[i].classList.remove('swiper-slide')
    }
    if (techContainer.classList.contains('swiper-container-initialized')) {
      mySwiperForTech.destroy()
    }
  }
}

function mobileSliderForPrice() {
  if (window.innerWidth < 768 && priceContainer.dataset.mobile) {
    priceContainer.classList.add('swiper')
    priceWrapper.classList.add('swiper-wrapper')
    for (let i = 0; i < priceItems.length; i++) {
      priceItems[i].classList.add('swiper-slide')
    }
    mySwiperForPrice = new Swiper(priceContainer, {
      slidesPerView: 'auto',
      spaceBetween: 16,

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    priceContainer.dataset.mobile === 'true'
  }
  if (window.innerWidth >= 768) {
    priceContainer.dataset.mobile === 'false'
    priceContainer.classList.remove('swiper')
    priceWrapper.classList.remove('swiper-wrapper')
    for (let i = 0; i < priceItems.length; i++) {
      priceItems[i].classList.remove('swiper-slide')
    }
    if (priceContainer.classList.contains('swiper-container-initialized')) {
      mySwiperForPrice.destroy()
    }
  }
}

mobileSliderForBrands()
mobileSliderForTech()
mobileSliderForPrice()

window.addEventListener('resize', () => {
  mobileSliderForBrands()
  mobileSliderForTech()
  mobileSliderForPrice()
})
