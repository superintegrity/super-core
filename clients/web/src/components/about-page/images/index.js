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
      juliaErnst: file(
        sourceInstanceName: { eq: "about-images" }
        relativePath: { eq: "julia-ernst.png" }
      ) {
        ...ImageFile
      }
      kevinGoldschmidt: file(
        sourceInstanceName: { eq: "about-images" }
        relativePath: { eq: "kevin-goldschmidt.png" }
      ) {
        ...ImageFile
      }
    }
  `)

  return <Img fluid={images[id].childImageSharp.fluid} />
}
