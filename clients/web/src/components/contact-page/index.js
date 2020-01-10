import React from 'react'

import { Layout } from '../../components/layout'
import { SEO } from '../../components/seo'
import { Section, MapBox, ContactBox } from './styled'
import { ContactForm } from '../../components/contact-form'
import { useStaticQuery, graphql } from 'gatsby'

export const ContactPage = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          mapApiKey
        }
      }
    }
  `)

  const address = '39-51 Kingsway, Glen Waverley VIC 3150'
  const email = 'pong_ho80@hotmail.com'
  const mobile = '0430 777 699'
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact.</h1>

      <Section>
        <ContactBox>
          <h3>{address}​</h3>
          <h3>{email}​</h3>
          <h3>Tel: {mobile}</h3>

          <ContactForm toEmail={email} />
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
