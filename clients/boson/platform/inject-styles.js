/**
 * @param {string[]} _files
 */
export default function (_files) {
  if (!window.SuperIntegrity.cssFileMap) {
    return
  }

  let files = Object.entries(window.SuperIntegrity.cssFileMap)
    .filter(([key, _value]) => {
      return _files.includes(key)
    })
    .map(([_key, value]) => value)

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
