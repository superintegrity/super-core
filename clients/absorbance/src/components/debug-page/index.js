import React from 'react'

import { Layout } from '../../components/layout'
import { SEO } from '../../components/seo'
import { RELEASE_DATE, RELEASE_VERSION } from '../../libs/config'

const releaseDateText = getReleaseDateText()

export const DebugPage = () => (
  <Layout>
    <SEO title="Debug" />
    <h1>Debug.</h1>
    <div>Release Date: {releaseDateText}</div>
    <div>Release Version: {RELEASE_VERSION}</div>
  </Layout>
)

function getReleaseDateText() {
  if (RELEASE_DATE === undefined) {
    return undefined
  }

  /**
   * @type {Date}
   */
  let releaseDate

  try {
    releaseDate = new Date(JSON.parse(RELEASE_DATE))
  } catch {
    releaseDate = new Date(RELEASE_DATE)
  }

  return releaseDate.toString()
}
