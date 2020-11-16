import { createDomElement } from './createDomElement'

/**
 * @param {string} domString
 */
export function setWrapper(domString) {
  const wrapper = createDomElement(domString)
  const sut = document.querySelector(`#root`)

  if (sut) {
    sut.childNodes.forEach((child) => {
      wrapper.appendChild(child)
    })
    sut.appendChild(wrapper)
  }
}
