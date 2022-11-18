const slider = document.querySelector('.brands__container');
const buttonShowAll = document.querySelector('.show-all__button');
const hidenItems = document.querySelectorAll('.brands__item--hiden--always');

let mySwiper;

function mobileSlider () {
	if(window.innerWidth < 768 && slider.dataset.mobile === 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 'auto',
			spaceBetween: 16,
			slideClass: 'brands__item',
			wrapperClass: 'brands__wrapper',
					
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
			navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
			},
			
		});
		slider.dataset.mobile === 'true';
	}
	if(window.innerWidth >= 768) {
		slider.dataset.mobile === 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
			console.log('swiper destroy');
		}
	}
}

mobileSlider();

window.addEventListener('resize', () => {
	mobileSlider();
});

document.addEventListener('click', showAll);

function showAll(event) {
	if (event.target.closest('.show-all__button')) {
		buttonShowAll.classList.toggle('_active');
		for (let i = 0; i < hidenItems.length; i++) {
			let hidenItem = hidenItems[i];
			hidenItem.classList.toggle('_active');
		}
	}
	if (!event.target.closest('.show-all__button')) {
		buttonShowAll.classList.remove('_active');
		hidenItem.classList.remove('_active');
		
	}
}

