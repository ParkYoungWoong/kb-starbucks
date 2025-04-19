const btnEl = document.querySelector('button')
const boxEl = document.querySelector('.box')

btnEl.addEventListener('contextmenu', () => {
  boxEl.classList.toggle('active')
})