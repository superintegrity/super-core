/**
 * @param {string[]} files
 */
export default function (files) {
  return Promise.all(
    files.map(function (file) {
      return new Promise(function (fulfil, reject) {
        var url = `/${file}`

        /** @type {HTMLLinkElement | null}  */
        var link = document.querySelector(
          'link[rel=stylesheet][href="' + url + '"]',
        )
        if (!link) {
          link = document.createElement('link')
          link.rel = 'stylesheet'
          link.href = url
          document.head.appendChild(link)
        }
        if (link.sheet) {
          fulfil()
        } else {
          link.onload = function () {
            return fulfil()
          }
          link.onerror = reject
        }
      })
    }),
  )
}
