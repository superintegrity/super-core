/**
 * @param {HTMLElement} element
 */
export default function flash(element) {
  requestAnimationFrame(() => {
    element.style.transition = 'none'
    element.style.color = 'rgba(255,62,0,1)'
    element.style.backgroundColor =
      Math.random() > 0.5 ? 'rgba(255,62,0,0.2)' : 'orange'

    setTimeout(() => {
      element.style.transition = 'color 1s, background 1s'
      element.style.color = ''
      element.style.backgroundColor = ''
    })
  })
}
