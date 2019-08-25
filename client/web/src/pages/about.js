import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import styled from "styled-components"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`about`, `about us`, `super`, `integrity`]} />
    <Images name="julia" />
    <Images name="kevin" />

    {/* <Root>
      <h1>About.</h1>
      <h3>
        Since our inception, Ernst & Goldschmidt has been totally focused on
        building a strategic, quality search practice.
      </h3>
      <p>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. Feel free to drag and drop me anywhere you
        like on your page. I’m a great place for you to tell a story and let
        your users know a little more about you.
      </p>

      <p>
        This is a great space to write long text about your company and your
        services. You can use this space to go into a little more detail about
        your company. Talk about your team and what services you provide. Tell
        your visitors the story of how you came up with the idea for your
        business and what makes you different from your competitors.
      </p>

      <div>
        <Images name="julia" />

        <h2>Julia Ernst</h2>
        <h4>Partner</h4>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
      </div>

      <div>
        <Images name="kevin" />
        <h2>Julia Ernst</h2>
        <h4>Partner</h4>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
      </div>
    </Root> */}
  </Layout>
)

const Images = ({ name }) => (
  <StaticQuery
    query={graphql`
      fragment ImageFile on File {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      query {
        julia: file(relativePath: { eq: "julia-ernst.png" }) {
          ...ImageFile
        }
        kevin: file(relativePath: { eq: "kevin-goldschmidt.png" }) {
          ...ImageFile
        }
      }
    `}
    render={data => <Img fluid={data[name].childImageSharp.fluid} />}
  />
)

const Root = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`

export default AboutPage
