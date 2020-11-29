/**
 *
 * @param {HTMLElement} node
 * @param {string} className
 */
export function hasClass(node, className) {
  if (node.classList) {
    return node.classList.contains(className)
  }
  return !!node.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}
