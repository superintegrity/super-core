/**
 * @param {string} domString
 */
export function createDomElement(domString) {
  const html = new DOMParser().parseFromString(domString, 'text/html')
  return html.body.firstChild ?? document.createElement('div')
}
