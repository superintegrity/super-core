import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export const Image = ({ id }) => {
  const images = useStaticQuery(graphql`
    fragment ImageFile on File {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    query {
      logo: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "super-integrity.png" }
      ) {
        ...ImageFile
      }
    }
  `)

  return <Img fluid={images[id].childImageSharp.fluid} />
}
