// Дополнительный эффект: изменение скорости при наведении
const heading = document.querySelector('.logo')

heading.addEventListener('mouseenter', () => {
  heading.computedStyleMap.animationDuration = '3.5s'
})

heading.addEventListener('mouseleave', () => {
  heading.computedStyleMap.animationDuration = '2.5s'
})
