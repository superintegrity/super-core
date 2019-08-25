import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import styled from "styled-components"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" keywords={[`services`, `super`, `integrity`]} />

    <Root>
      <h1>Services.</h1>
      <h2>Business Continuity</h2>
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
      <h2>Enterprise Risk Management</h2>
      <p>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. Feel free to drag and drop me anywhere you
        like on your page. I’m a great place for you to tell a story and let
        your users know a little more about you.
      </p>

      <h2>Industries</h2>
      <ul>
        <li>IT & Telecom</li>
        <li>Communications & Entertainment</li>
        <li> Marketing & Communications</li>
        <li>​Financial & Professional Services</li>
        <li> Architecture</li>
        <li> Design & Engineering</li>
        <li>Energy </li>
        <li>Resources & Infrastructure</li>
      </ul>

      <h2>Specialized Advisory Services</h2>
      <p>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. Feel free to drag and drop me anywhere you
        like on your page. I’m a great place for you to tell a story and let
        your users know a little more about you.
      </p>
    </Root>
  </Layout>
)

const Root = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`

export default ServicesPage
