const slides = document.getElementsByClassName('carousel-item')
const nextBtn = document.getElementById('carousel-next')
const prevBtn = document.getElementById('carousel-prev')
let slidePositon = 0
const totalSlieds = slides.length


nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)


function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible')
    slide.classList.add('carousel-item-hidden')
  }

  slides[slidePositon].classList.add('carousel-item-visible')
}

function nextSlide() {
  if (slidePositon == totalSlieds - 1) {
    slidePositon = 0
  } else {
    slidePositon++
  }
  updateSlidePosition()
}

function prevSlide() {
  if (slidePositon == 0) {
    slidePositon = totalSlieds - 1
  } else {
    slidePositon--
  }

  updateSlidePosition()
}