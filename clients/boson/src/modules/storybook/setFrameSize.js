/**
 *
 * @param {object} input
 * @param {Element | undefined | null} input.frameElement
 * @param {string} input.title
 * @param {string=} input.width
 * @param {string=} input.height
 */
export function setFrameSize({ frameElement, title, width, height }) {
  if (frameElement?.getAttribute('title') === title) {
    if (width) {
      /** @type {any} */ (frameElement).style.width = width;
    }

    if (height) {
      // /** @type {any} */ (frameElement).style.height = height;
      const frameParent = frameElement.closest('div');
      if (frameParent) {
        frameParent.style.height = height;
      }
    }
  }
}
