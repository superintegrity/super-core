import { add_resize_listener } from 'svelte/internal'
import { hasClass } from './hasClass'

/**
 *
 * @param {HTMLElement} node
 * @param {Record<string, number>} breakpointInfos
 *  - key is the css class name, value is the minimum width
 */
export function containerQuery(node, breakpointInfos) {
  const onResize = () => {
    const { clientWidth } = node

    const activeBreakpointNames = getActiveBreakpointNames({
      breakpointInfos,
      clientWidth,
    })

    const inactiveBreakpointNames = Object.keys(breakpointInfos).filter(
      (name) => !activeBreakpointNames.includes(name),
    )

    inactiveBreakpointNames.forEach((name) => {
      if (hasClass(node, name)) {
        node.classList.remove(name)
      }
    })

    activeBreakpointNames.forEach((name) => {
      if (!hasClass(node, name)) {
        node.classList.add(name)
      }
    })
  }
  onResize()

  const removeResizeListener = add_resize_listener(node, onResize)

  return {
    destroy() {
      removeResizeListener()
    },
  }
}

/**
 * @param {object} input
 * @param {Record<string, number>} input.breakpointInfos
 * @param {number} input.clientWidth
 */
export function getActiveBreakpointNames({ breakpointInfos, clientWidth }) {
  return Object.entries(breakpointInfos).reduce((acc, [key, value]) => {
    if (clientWidth >= value) {
      acc.push(key)
    }
    return acc
  }, /** @type {string[]} */ ([]))
}
