import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Section } from './styled'

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Services.</h1>

    <Section>
      <h3>Business Continuity</h3>
      <div>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <p>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors.
        </p>
      </div>
    </Section>

    <Section>
      <h3>Enterprise Risk Management</h3>
      <div>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
      </div>
    </Section>

    <Section>
      <h3>Industries IT & Telecom</h3>
      <div>
        <ul>
          <li>Communications & Entertainment</li>
          <li>Marketing & Communications</li>
          <li>​Financial & Professional Services</li>
          <li>Architecture</li>
          <li>Design & Engineering</li>
          <li>Energy</li>
          <li>Resources & Infrastructure</li>
        </ul>
      </div>
    </Section>

    <Section>
      <h3>Specialized Advisory Services</h3>
      <div>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click "Edit Text" or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
      </div>
    </Section>
  </Layout>
)

export default ServicesPage