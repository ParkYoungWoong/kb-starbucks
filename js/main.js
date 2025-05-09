const bannerEl = document.querySelector('.banner')
window.addEventListener('scroll', function () {
  // console.log(window.scrollY)
  if (window.scrollY > 500) {
    gsap.to(bannerEl, 1, {
      opacity: 0,
      display: 'none'
    })
  }
})

const fadeEls = document.querySelectorAll('section.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 1,
    opacity: 1
  })
})

// new Swiper(선택자, 옵션)
new Swiper('section.notice .swiper-container', {
  direction: 'vertical',
  autoplay: {
    delay: 2000 // ms
  },
  loop: true
})









// async function fetchMovies() {
//   const response = await fetch('https://omdbapi.com?apikey=7035c60c&s=avengers')
//   const json = await response.json()
//   console.log(json.Search)

//   const ulEl = document.querySelector('ul.movies')
//   json.Search.forEach(function (movie) {
//     const liEl = document.createElement('li')
//     liEl.textContent = movie.Title
//     const imgEl = document.createElement('img')
//     imgEl.src = movie.Poster
//     liEl.append(imgEl)
//     ulEl.append(liEl)
//   })
// }

// fetchMovies()