const swiper = new Swiper('.swiper', {
	mousewheel: true,
	direction: 'vertical',
	speed: 1700,
	parallax: true
})

document.querySelectorAll('.header-content h1').forEach(e => {
	e.innerHTML = e.textContent.replace(/ (-|#|@){1}/g, s => s[1] + s[0]).replace(/(\S*)/g, m => {
		return m.replace(/\S(-|#|@)?/g, '<span class="letter">$&</span>')
	})
	e.querySelectorAll('.letter').forEach(function (l, i) {
		l.setAttribute('style', `z-index: -${i}; transition-duration: ${i / 5 + 1}s`)
	})
})

swiper.on('slideChange', function () {
	document.querySelectorAll('.header-content__slide').forEach(function (e, i) {
		return swiper.activeIndex === i ? e.classList.add('active') : e.classList.remove('active')
	})
})

// ----------------carousel------------------------

const listInfo = document.querySelector('.list-info');
const listImg = document.querySelector('.car-list-img');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let index = 0;

nextBtn.addEventListener('click', () => {

	index = (index < 3) ? index + 1 : 3;

	listInfo.style.transform = `translateY(${index * -25}%)`
	listImg.style.transform = `translateY(${index * -100}%)`
})

prevBtn.addEventListener('click', () => {

	index = (index > 0) ? index - 1 : 0;

	listInfo.style.transform = `translateY(${index * -25}%)`
	listImg.style.transform = `translateY(${index * -100}%)`

})


