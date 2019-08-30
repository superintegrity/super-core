import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { Section, MapBox, ContactBox } from './styled'
import ContactForm from '../../components/contact-form'
import { useStaticQuery, graphql } from 'gatsby'

const ContactPage = () => {
  const { site } = useStaticQuery(graphql`
    query MapApiKeyQuery {
      site {
        siteMetadata {
          mapApiKey
        }
      }
    }
  `)

  const address = 'Glen Waverley Station, Glen Waverley, Australia'

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>

      <Section>
        <ContactBox>
          <h3>500 Terry Francois Street San Francisco, CA 94158​</h3>
          <h3>info@mysite​</h3>
          <h3>Tel: 0430 777 699</h3>

          <ContactForm />
        </ContactBox>
        <MapBox>
          <iframe
            title="address"
            src={`https://www.google.com/maps/embed/v1/place?key=${
              site.siteMetadata.mapApiKey
            }&q=${encodeURIComponent(address)}`}
          ></iframe>
        </MapBox>
      </Section>
    </Layout>
  )
}

export default ContactPage
